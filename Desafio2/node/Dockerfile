#criando/download imagem padrão
FROM node:latest

RUN apt-get update && apt-get install -y wget

#instalação do docker-rize para aguardar a finalização da execução de um serviço 
#do docker-compose para iniciar a instalação de outro serviço dependente
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#atribuindo padrão que irá executar dentro do container
USER node

#setando a folder padrão
WORKDIR /usr/src/app