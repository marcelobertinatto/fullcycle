#baixar a imagem base do nginx
FROM nginx:1.15.0-alpine

#removendo o arquivo de config padrão, pois será substituído pelo o arquivo config que criamos
RUN rm /etc/nginx/conf.d/default.conf

#copiando o arquivo custom config para o caminho default do nginx
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080
