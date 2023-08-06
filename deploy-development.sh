docker buildx build --platform linux/amd64 -t exostic/exostic.com:latest .
docker push exostic/exostic.com:latest
kubectl apply -f ./deployment
kubectl rollout restart deployment/exostic-com
