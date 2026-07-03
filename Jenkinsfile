pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  parameters {
    booleanParam(name: 'RUN_SONAR', defaultValue: false, description: 'Run SonarCloud analysis')
    booleanParam(name: 'PUSH_DOCKER', defaultValue: false, description: 'Build and push Docker images to Docker Hub')
    booleanParam(name: 'DEPLOY_K8S', defaultValue: false, description: 'Deploy Kubernetes manifests')
    string(name: 'DOCKERHUB_NAMESPACE', defaultValue: 'amal774', description: 'Docker Hub username or namespace')
  }

  environment {
    FRONTEND_IMAGE = 'car-rental-frontend'
    DISCOVERY_IMAGE = 'car-rental-discovery-service'
    GATEWAY_IMAGE = 'car-rental-api-gateway'
    AUTH_IMAGE = 'car-rental-auth-service'
    CAR_IMAGE = 'car-rental-car-service'
    CUSTOMER_IMAGE = 'car-rental-customer-service'
    RENTAL_IMAGE = 'car-rental-rental-service'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Angular') {
      steps {
        sh '''
          npm ci
          npm run build -- --configuration production
        '''
      }
    }

    stage('Build Spring Boot Services') {
      steps {
        sh '''
          for service in discovery-service api-gateway auth-service CustomerService rental-service; do
            echo "Building $service"
            cd "$service"
            chmod +x mvnw
            ./mvnw clean package -DskipTests
            cd ..
          done

          cd car-service
          chmod +x gradlew
          ./gradlew clean bootJar -x test
        '''
      }
    }

    stage('SonarCloud Analysis') {
      when {
        expression { return params.RUN_SONAR }
      }
      steps {
        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
          sh '''
            sonar-scanner \
              -Dsonar.token=$SONAR_TOKEN
          '''
        }
      }
    }

    stage('Build Docker Images') {
      when {
        expression { return params.PUSH_DOCKER }
      }
      steps {
        sh '''
          docker build -t $DOCKERHUB_NAMESPACE/$FRONTEND_IMAGE:latest .
          docker build -t $DOCKERHUB_NAMESPACE/$DISCOVERY_IMAGE:latest ./discovery-service
          docker build -t $DOCKERHUB_NAMESPACE/$GATEWAY_IMAGE:latest ./api-gateway
          docker build -t $DOCKERHUB_NAMESPACE/$AUTH_IMAGE:latest ./auth-service
          docker build -t $DOCKERHUB_NAMESPACE/$CAR_IMAGE:latest ./car-service
          docker build -t $DOCKERHUB_NAMESPACE/$CUSTOMER_IMAGE:latest ./CustomerService
          docker build -t $DOCKERHUB_NAMESPACE/$RENTAL_IMAGE:latest ./rental-service
        '''
      }
    }

    stage('Push Docker Images') {
      when {
        expression { return params.PUSH_DOCKER }
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_TOKEN')]) {
          sh '''
            echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USERNAME" --password-stdin
            docker push $DOCKERHUB_NAMESPACE/$FRONTEND_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$DISCOVERY_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$GATEWAY_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$AUTH_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$CAR_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$CUSTOMER_IMAGE:latest
            docker push $DOCKERHUB_NAMESPACE/$RENTAL_IMAGE:latest
          '''
        }
      }
    }

    stage('Deploy Kubernetes') {
      when {
        expression { return params.DEPLOY_K8S }
      }
      steps {
        withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_FILE')]) {
          sh '''
            export KUBECONFIG=$KUBECONFIG_FILE
            kubectl apply -f k8s/
            kubectl rollout status deployment/frontend -n car-rental
          '''
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'dist/**,**/target/*.jar,car-service/build/libs/*.jar', allowEmptyArchive: true
    }
  }
}
