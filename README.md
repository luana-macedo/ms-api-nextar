##Nextar user api

## Description

Esta aplicação é um uma Api de gerenciamento de Usuários com acesso restrito mediante autenticação. Temos dois níveis de acesso de usuário: user e admin
O usuário ‘“user” poderá apenas consultar informações e editar seu próprio perfil
O usuário admin poderá consultar informações e cadastrar/editar todos usuários
Etapas para rodar localmente você precisará de: 
Nodejs instalado,
repositório ms-nextar-api clonado 
prompt de comando 

Siga os comando abaixo para rodar o projeto localmente:
Primeiro crie um arquivo .env e adicione a seguinte variável de ambiente:
MONGODB='mongodb+srv://luana:7wLrpsfTYb2pWBvG@cluster0.mtjrqdm.mongodb.net/?retryWrites=true&w=majority'

no prompt de comando:
npm install
npm start:dev
Para testar as requisições no postman, siga os passos: 

Fazer login:
Post: http://localhost:8082/auth/login

Para logar como admin:
email: admin@email.com
senha: Lu159753

para logar como usuário:
    "password": "Us159753",
    "email": "user@email.com"

Copie o token retornado e cole em authorization no header para acessar outras requisições.

Lista de requisições:

Post: http://localhost:8082/auth/login
Get, Post, patch e delete http://localhost:8082/users
Get: http://localhost:8082/profile
Patch: http://localhost:8082/profile/edit

Json exemplo:
{
    "password": "Us159753",
    "email": "user@email.com",
    "permissions": "user",
    "phone": "011955551234",
    "name": "user"
 }

