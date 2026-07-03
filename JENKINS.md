# Jenkins setup

Use Jenkins instead of GitHub Actions for CI/CD.

## Required Jenkins tools

- Node.js 20 or newer
- Java 21
- Maven or Maven wrappers allowed
- Docker CLI
- SonarScanner CLI, only if you enable SonarCloud
- kubectl, only if you enable Kubernetes deploy

## Jenkins credentials

Create these credentials in Jenkins:

- `dockerhub-credentials`: Username/password credential for Docker Hub.
- `sonar-token`: Secret text credential for SonarCloud token.
- `kubeconfig`: Secret file credential containing your Kubernetes kubeconfig.

## Create the Jenkins job

1. Jenkins dashboard -> New Item.
2. Choose Pipeline.
3. Pipeline from SCM.
4. SCM: Git.
5. Repository URL: `https://github.com/amal774/car-rental-platform.git`
6. Branch: `*/PFA`
7. Script Path: `Jenkinsfile`
8. Save.

## First run

Run the pipeline with all parameters unchecked:

- `RUN_SONAR`: false
- `PUSH_DOCKER`: false
- `DEPLOY_K8S`: false

After the build works, enable Docker, SonarCloud, then Kubernetes one by one.
