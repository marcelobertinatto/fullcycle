FROM mysql:5.7

#alterando o ID do usuário mysql para 1000, pois é este usuário que o docker utiliza para a criação dentro do container
RUN usermod -u 1000 mysql

#atribuindo o usuário mysql com o ID 1000
USER mysql