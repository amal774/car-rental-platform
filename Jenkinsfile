pipeline {
  agent any

  parameters {
    booleanParam(name: 'RUN_SONAR', defaultValue: false, description: 'Run SonarCloud analysis')
    booleanParam(name: 'PUSH_DOCKER', defaultValue: false, description: 'Build and push Docker images to Docker Hub')
    booleanParam(name: 'DEPLOY_K8S', defaultValue: false, description: 'Deploy Kubernetes manifests to Minikube')
  }

  environment {
    DOCKERHUB_USER = 'mechergui508'
    KUBECONFIG = 'C:\\ProgramData\\Jenkins\\.jenkins\\.kube\\config'

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

    stage('Check Tools') {
      steps {
        bat 'node --version'
        bat 'npm --version'
        bat 'java -version'
        bat 'docker --version'
        bat 'kubectl version --client'
      }
    }

    stage('Build Angular') {
      steps {
        bat '''
          set npm_config_cache=%CD%\\.npm-cache
          npm cache verify
          npm install --no-audit --no-fund
          npm run build -- --configuration production
        '''
      }
    }

    stage('Maven Clean Package') {
      steps {
        bat '''
          cd discovery-service
          call mvnw.cmd clean package -DskipTests
          cd ..

          cd api-gateway
          call mvnw.cmd clean package -DskipTests
          cd ..

          cd auth-service
          call mvnw.cmd clean package -DskipTests
          cd ..

          cd CustomerService
          call mvnw.cmd clean package -DskipTests
          cd ..

          cd rental-service
          call mvnw.cmd clean package -DskipTests
          cd ..
        '''
      }
    }

    stage('Gradle Build Car Service') {
      steps {
        bat '''
          cd car-service
          call gradlew.bat clean bootJar -x test
          cd ..
        '''
      }
    }

    stage('SonarCloud Analysis') {
      when {
        expression { return params.RUN_SONAR }
      }
      steps {
        script {
          def scannerHome = tool 'SonarScanner'
          withSonarQubeEnv('SonarQube') {
            bat "\"${scannerHome}\\bin\\sonar-scanner.bat\" -D\"sonar.organization=aminemechergui\" -D\"sonar.projectKey=rent_car\""
          }
        }
      }
    }

    stage('Build Docker Images') {
      when {
        expression { return params.PUSH_DOCKER }
      }
      steps {
        bat '''
          docker logout || echo Docker logout skipped

          docker build -t %DOCKERHUB_USER%/%FRONTEND_IMAGE%:latest .
          docker build -t %DOCKERHUB_USER%/%DISCOVERY_IMAGE%:latest ./discovery-service
          docker build -t %DOCKERHUB_USER%/%GATEWAY_IMAGE%:latest ./api-gateway
          docker build -t %DOCKERHUB_USER%/%AUTH_IMAGE%:latest ./auth-service
          docker build -t %DOCKERHUB_USER%/%CAR_IMAGE%:latest ./car-service
          docker build -t %DOCKERHUB_USER%/%CUSTOMER_IMAGE%:latest ./CustomerService
          docker build -t %DOCKERHUB_USER%/%RENTAL_IMAGE%:latest ./rental-service
        '''
      }
    }

    stage('Push Docker Hub') {
      when {
        expression { return params.PUSH_DOCKER }
      }
      steps {
        withCredentials([string(credentialsId: 'mechergui508', variable: 'DOCKERHUB_TOKEN')]) {
          bat '''
            echo %DOCKERHUB_TOKEN% | docker login -u %DOCKERHUB_USER% --password-stdin

            docker push %DOCKERHUB_USER%/%FRONTEND_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%DISCOVERY_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%GATEWAY_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%AUTH_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%CAR_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%CUSTOMER_IMAGE%:latest
            docker push %DOCKERHUB_USER%/%RENTAL_IMAGE%:latest
          '''
        }
      }
    }

    stage('Deploy Kubernetes Minikube') {
      when {
        expression { return params.DEPLOY_K8S }
      }
      steps {
        bat '''
          kubectl config current-context
          kubectl get nodes

          kubectl apply -f k8s/namespace.yaml
          kubectl apply -f k8s/mysql.yaml
          kubectl apply -f k8s/backend.yaml
          kubectl apply -f k8s/frontend.yaml

          kubectl set image deployment/frontend frontend=%DOCKERHUB_USER%/%FRONTEND_IMAGE%:latest -n car-rental
          kubectl set image deployment/discovery-service discovery-service=%DOCKERHUB_USER%/%DISCOVERY_IMAGE%:latest -n car-rental
          kubectl set image deployment/api-gateway api-gateway=%DOCKERHUB_USER%/%GATEWAY_IMAGE%:latest -n car-rental
          kubectl set image deployment/auth-service auth-service=%DOCKERHUB_USER%/%AUTH_IMAGE%:latest -n car-rental
          kubectl set image deployment/car-service car-service=%DOCKERHUB_USER%/%CAR_IMAGE%:latest -n car-rental
          kubectl set image deployment/customer-service customer-service=%DOCKERHUB_USER%/%CUSTOMER_IMAGE%:latest -n car-rental
          kubectl set image deployment/rental-service rental-service=%DOCKERHUB_USER%/%RENTAL_IMAGE%:latest -n car-rental

          kubectl rollout status deployment/mysql -n car-rental --timeout=180s
          kubectl rollout status deployment/discovery-service -n car-rental --timeout=180s
          kubectl rollout status deployment/api-gateway -n car-rental --timeout=180s
          kubectl rollout status deployment/auth-service -n car-rental --timeout=180s
          kubectl rollout status deployment/car-service -n car-rental --timeout=180s
          kubectl rollout status deployment/customer-service -n car-rental --timeout=180s
          kubectl rollout status deployment/rental-service -n car-rental --timeout=180s
          kubectl rollout status deployment/frontend -n car-rental --timeout=180s

          kubectl get pods -n car-rental -o wide
          kubectl get svc -n car-rental
        '''
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'dist/**,**/target/*.jar,car-service/build/libs/*.jar', allowEmptyArchive: true
    }
  }
}
