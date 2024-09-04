Passo a passo para iniciar aplicação no Kubernetes

- kind create cluster

- docker build -t minha-imagem:tag .

- kind load docker-image minha-imagem:tag

- kubectl apply -f deployment.yaml

- kubectl apply -f service.yaml

- kubectl port-forward service/meu-service 8080:80