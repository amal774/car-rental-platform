# DevOps Setup

This project includes:

- Docker and Docker Compose
- Kubernetes manifests
- GitHub Actions CI/CD
- SonarCloud analysis

## Local Docker

Start Docker Desktop, then run:

```powershell
docker compose up --build
```

Open:

```text
http://localhost:4200
```

Docker MySQL is exposed on port `3307`, so it does not conflict with XAMPP on `3306`.

## GitHub Secrets

Add these secrets in GitHub:

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
SONAR_TOKEN
SONAR_PROJECT_KEY
SONAR_ORGANIZATION
KUBE_CONFIG
```

`KUBE_CONFIG` must be your kubeconfig encoded in base64.

## Kubernetes

Manual deploy:

```powershell
kubectl apply -f k8s/
```

Check:

```powershell
kubectl get pods -n car-rental
kubectl get svc -n car-rental
```

Before manual deploy, replace `your-dockerhub-username` in `k8s/*.yaml` with your real Docker Hub username.
