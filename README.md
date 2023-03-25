# nginx_node_mysql
 
Desafio 

Utilização do nginx como proxy reverso. Ao acessar o nginx, o mesmo fará uma chamada na aplicação node.js. 
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx é :

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Para rodar execute : 

docker-compose up -d 

Acessar : http://localhost:8080
