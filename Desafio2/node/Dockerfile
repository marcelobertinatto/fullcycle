#criando/download imagem padrão
FROM node:latest

#setando a folder padrão
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
RUN npm install express --save 
RUN npm install mysql

#copiando todos arquivos de source para dest
COPY . .

RUN apt-get update && apt-get install -y wget

#instalação do docker-rize para aguardar a finalização da execução de um serviço 
#do docker-compose para iniciar a instalação de outro serviço dependente
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#expondo a porta padrão
#EXPOSE 8080

ENTRYPOINT [ "node","index.js" ]