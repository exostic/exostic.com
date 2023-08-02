docker build -t exostic.com .
kubectl apply -f ./deployment
kubectl rollout restart deployment/exostic-com
