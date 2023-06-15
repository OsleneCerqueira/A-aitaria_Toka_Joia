

# 🍨 API  - Açaitaria Toka Joia



Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/) e [Sequelize](https://sequelize.org/docs/v6/). Como banco de dados, foi utilizado o MySql.

# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#-pré-requisitos)
- [Packages](#-packages)
- [Instalação](#-instalação-da-aplicação)
- [Rotas](#%EF%B8%8F-rotas)
- [Hospedagem no AWS](#-)
- [Desenvolvido por](#-desenvolvido-por)
<!--te-->

## 📚 Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0
- INSOMNIA v.3.6.0

## 📦 Packages

- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/mysql2">MySql2</a>
- <a href="https://nodemon.io/">Nodemon</a>
- <a href="https://www.npmjs.com/package/cors">Cors</a>
- <a href="https://sequelize.org/docs/v6/">Sequelize</a>
- <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>
- <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
- <a href="https://express-validator.github.io/docs/">express-validator</a>
- <a href="https://www.npmjs.com/package/http-errors">http-errors</a>
- <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>




## 📥 Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/OsleneCerqueira/Acaitaria_Toka_Joia.git
```

Entrando na pasta:

```
cd api
```


Instalando todos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm run dev
```

## 🏎️ Rotas

### Usuario

- **GET /usuarios**

  Esquema da resposta

  ```json
  [
      {
		"id": 4,
		"nome": "Oslene Santos",
		"email": "oslene@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "$2b$10$gKXZicYOu6lJk0PJFyG7qObWA.b09Zya6T3sSIMfEANwfiMl7qDde",
		"createdAt": "2022-10-14T12:15:33.000Z",
		"updatedAt": "2022-10-14T12:15:33.000Z"
	},
	{
		"id": 5,
		"nome": "bruna Mnedess",
		"email": "mendess@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "$2b$10$KUorzD3j/iF.6g8HChY9BeWaq1gZhAj1wcVquaA0/jD2FAeUNnCQG",
		"createdAt": "2022-10-14T14:08:12.000Z",
		"updatedAt": "2022-10-14T14:08:12.000Z"
	},]
  ```

- **GET /usuarios/cargo/Vendedor(a)**

  Esquema da resposta

  ```json
  [{
		"id": 4,
		"nome": "Oslene Santos",
		"email": "oslene@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "$2b$10$gKXZicYOu6lJk0PJFyG7qObWA.b09Zya6T3sSIMfEANwfiMl7qDde",
		"createdAt": "2022-10-14T12:15:33.000Z",
		"updatedAt": "2022-10-14T12:15:33.000Z"
	},
	{
		"id": 5,
		"nome": "bruna Mnedess",
		"email": "mendess@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "$2b$10$KUorzD3j/iF.6g8HChY9BeWaq1gZhAj1wcVquaA0/jD2FAeUNnCQG",
		"createdAt": "2022-10-14T14:08:12.000Z",
		"updatedAt": "2022-10-14T14:08:12.000Z"
	}]
    ```
    **GET /usuarios/id/4**

  Esquema da resposta

  ```json
  [{
		"id": 4,
		"nome": "Oslene Santos",
		"email": "oslene@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "$2b$10$gKXZicYOu6lJk0PJFyG7qObWA.b09Zya6T3sSIMfEANwfiMl7qDde",
		"createdAt": "2022-10-14T12:15:33.000Z",
		"updatedAt": "2022-10-14T12:15:33.000Z"
	}]
  ```

- **POST /usuarios**
 Esquema da requisição

  ```json
  {
        "nome": "Oslene Santos",
		"email": "oslene@gmail.com",
		"cargo": "Vendedor(a)",
		"senha": "123456",
  }
  ```
  Esquema da resposta

  ```json
  {
        "sucess":"Usuário criado com sucesso"
  }
  ```

 **POST /usuarios/login**
 Esquema da requisição

  ```json
  {
        "email": "carlosAlberto@gmail.com",
		"senha": "n54545#181#"
  }
  ```
  Esquema da resposta 

  ```json
  {
	"auth": true,
	"usuario": {
		"id": 22,
		"nome": "Carlos Albertp",
		"email": "carlosAlberto@gmail.com",
		"cargo": "administrador",
		"senha": "$2b$10$eEmEVjcPfD9gr3.5hTq4SuVu2iYXod4GC0PAz.qLn8uPB6UPIB0l6",
		"createdAt": "2022-10-29T01:25:44.000Z",
		"updatedAt": "2022-10-29T01:25:44.000Z"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTY2NzAwNjc2M30.KVe-jhhm-wKnF4wkc8LqcIJv0dPTurNfeX6VHrYSRzU"
}
  
  ```

- **PUT /usuarios/id/:4**
 Esquema da requisição
  ```json
  {
		"cargo": "Vendedor(a)",
		"senha": "123456",
  }
  ```
  Esquema da resposta

  ```json
  {
    "sucess": "Usuário de id: 4 foi atualizado com sucesso"
  }
  ```

- **DELETE /cliente/id/:4**

  Esquema da resposta

  ```json
  {
    "sucess": "Usuário de id: 4 foi deletado com sucesso"
  }
  ```


### Produto

- **GET /mesas**

  Esquema da resposta

  ```json 
    [
      {
		"id": 2,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 300,
		"preco": 11,
		"categoria": "Açai",
		"createdAt": "2022-10-24T12:49:50.000Z",
		"updatedAt": "2022-10-24T12:49:50.000Z"
	},
	{
		"id": 3,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 400,
		"preco": 13,
		"categoria": "Açai",
		"createdAt": "2022-10-25T12:05:09.000Z",
		"updatedAt": "2022-10-25T12:05:09.000Z"
	},
	{
		"id": 4,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 500,
		"preco": 15,
		"categoria": "Açai",
		"createdAt": "2022-10-25T12:05:22.000Z",
		"updatedAt": "2022-10-25T12:05:22.000Z"
	}
    ]

  ```

- **GET /produtos/id/2**

  Esquema da resposta

  ```json
  {
		"id": 2,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 300,
		"preco": 11,
		"categoria": "Açai",
		"createdAt": "2022-10-24T12:49:50.000Z",
		"updatedAt": "2022-10-24T12:49:50.000Z"
	}
  ```
- **GET /produtos/categoria/Açai**
  
  Esquema da resposta

  ```json
  [
      {
		"id": 2,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 300,
		"preco": 11,
		"categoria": "Açai",
		"createdAt": "2022-10-24T12:49:50.000Z",
		"updatedAt": "2022-10-24T12:49:50.000Z"
	},
	{
		"id": 3,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 400,
		"preco": 13,
		"categoria": "Açai",
		"createdAt": "2022-10-25T12:05:09.000Z",
		"updatedAt": "2022-10-25T12:05:09.000Z"
	},
	{
		"id": 4,
		"nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 500,
		"preco": 15,
		"categoria": "Açai",
		"createdAt": "2022-10-25T12:05:22.000Z",
		"updatedAt": "2022-10-25T12:05:22.000Z"
	}
    ]
  ```

- **POST /produtos**

  Esquema da requisição

  ```json
  {     "nome": "Tradicional",
		"descricao": "acai, banana em rodelas, granola e leite condensado",
		"tamanho": 500,
		"preco": 15,
		"categoria": "Açai"}
  ```

  Esquema da resposta

  ```json
  {
    "sucess": "Produto criado com sucesso"
  }
  ```

- **PUT  /produto/id/:2**

  Esquema da requisição

  ```json
  {
   "preco": 15
  }
  ```

  Esquema da resposta

  ```json
  {
    	"sucess": "Produto de id: 2 foi atualizada com sucesso"
  }
  ```

- **DELETE /produto/id/2**

  Esquema da resposta

  ```json
  {
    	"sucess": "Produto de id: 2 foi deletado com sucesso"
  }
  ```



 

### Pedido

- **GET /pedidos**

  Esquema da resposta

  ```json 
    [{
		"id": 1,
		"statusPedido": "PREPARANDO",
		"pagamento": false,
		"createdAt": "2022-10-24T16:29:17.000Z",
		"updatedAt": "2022-10-24T16:29:17.000Z",
		"idUsuario": 9,
		"idMesa": 2
	}
    ]

  ```

- **GET /pedidos/id/1**

  Esquema da resposta

  ```json
  {
		"id": 1,
		"statusPedido": "PREPARANDO",
		"pagamento": false,
		"createdAt": "2022-10-24T16:29:17.000Z",
		"updatedAt": "2022-10-24T16:29:17.000Z",
		"idUsuario": 9,
		"idMesa": 2
	}
  ```
- **GET /pedidos/statusPedido/PREPARANDO**
  
  Esquema da resposta

  ```json
  [
      {
		"id": 1,
		"statusPedido": "PREPARANDO",
		"pagamento": false,
		"createdAt": "2022-10-24T16:29:17.000Z",
		"updatedAt": "2022-10-24T16:29:17.000Z",
		"idUsuario": 9,
		"idMesa": 2
	}
    ]
  ```
  - **GET /pedidos/pagamento/false**
  
  Esquema da resposta

  ```json
  [
      {
		"id": 1,
		"statusPedido": "PREPARANDO",
		"pagamento": false,
		"createdAt": "2022-10-24T16:29:17.000Z",
		"updatedAt": "2022-10-24T16:29:17.000Z",
		"idUsuario": 9,
		"idMesa": 2
	}
    ]
  ```

- **POST /pedidos**

  Esquema da requisição

  ```json
  {     "statusPedido": "PREPARANDO",
		"pagamento": false}
  ```

  Esquema da resposta

  ```json
  {
    "sucess": "Pedido criado com sucesso"
  }
  ```

- **PUT  /pedido/id/:2**

  Esquema da requisição

  ```json
  {
   "statusPedido": "PREPARANDO",
		"pagamento": false
  }
  ```

  Esquema da resposta

  ```json
  {
    	"sucess": "Pedido de id: 1 foi atualizada com sucesso"
  }
  ```

- **DELETE /pedido/id/2**

  Esquema da resposta

  ```json
  {
    	"sucess": "Pedido de id: 1 foi deletado com sucesso"
  }
  ```

### Item Pedido 

- **GET /itensPedido**

  Esquema da resposta

  ```json 
    [{
		"id": 3,
		"qtdProduto": 2,
		"createdAt": "2022-10-24T17:21:15.000Z",
		"updatedAt": "2022-10-24T17:21:15.000Z",
		"idProduto": 1,
		"idPedido": 1
	},
	{
		"id": 4,
		"qtdProduto": 1,
		"createdAt": "2022-10-24T17:33:36.000Z",
		"updatedAt": "2022-10-24T17:33:36.000Z",
		"idProduto": 1,
		"idPedido": 1
	},
	{
		"id": 5,
		"qtdProduto": 1,
		"createdAt": "2022-10-24T17:34:29.000Z",
		"updatedAt": "2022-10-24T17:34:29.000Z",
		"idProduto": 1,
		"idPedido": 1
	},
    ]

  ```

- **GET /pedidos/id/3**

  Esquema da resposta

  ```json
  {
		"id": 3,
		"qtdProduto": 2,
		"createdAt": "2022-10-24T17:21:15.000Z",
		"updatedAt": "2022-10-24T17:21:15.000Z",
		"idProduto": 1,
		"idPedido": 1
	}
  ```

- **POST /pedidos**

  Esquema da requisição

  ```json
  {    "qtdProduto": 2}
  ```

  Esquema da resposta

  ```json
  {
    "sucess": "Item do Pedido criado com sucesso"
  }
  ```

- **PUT  /pedido/id/:1**

  Esquema da requisição

  ```json
  {
   "qtdProduto": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    	"sucess": "Item do Pedido de id: 1 foi atualizada com sucesso"
  }
  ```

- **DELETE /pedido/id/2**

  Esquema da resposta

  ```json
  {
    	"sucess": "Item do Pedido de id: 1 foi deletado com sucesso"
  }
  ```

### Mesa

- **GET /mesas**

  Esquema da resposta

  ```json 
    [
      {
		"id": 2,
		"descricao": "balcao",
		"status": "LIVRE",
		"createdAt": "2022-10-24T16:16:36.000Z",
		"updatedAt": "2022-10-24T16:16:36.000Z"
	}
    ]

  ```

- **GET /mesas/id/2**

  Esquema da resposta

  ```json
  {
		"id": 2,
		"descricao": "balcao",
		"status": "LIVRE",
		"createdAt": "2022-10-24T16:16:36.000Z",
		"updatedAt": "2022-10-24T16:16:36.000Z"
	}
  ```
- **GET /mesas/status/LIVRE**
  
  Esquema da resposta

  ```json
  [{
		"id": 2,
		"descricao": "balcao",
		"status": "LIVRE",
		"createdAt": "2022-10-24T16:16:36.000Z",
		"updatedAt": "2022-10-24T16:16:36.000Z"
	}
    ]
  ```

- **POST /mesas**

  Esquema da requisição

  ```json
  {    "descricao": "balcao",
		"status": "LIVRE"}
  ```

  Esquema da resposta

  ```json
  {
    "sucess": "Mesa criada com sucesso"
  }
  ```

- **PUT  /mesas/id/:2**

  Esquema da requisição

  ```json
  {
		"status": "OCUPADA",
  }
  ```

  Esquema da resposta

  ```json
  {
    	"sucess": "Mesa de id: 2 foi atualizada com sucesso"
  }
  ```

- **DELETE /produto/id/2**

  Esquema da resposta

  ```json
  {
    	"sucess": "Mesa de id: 2 foi deletado com sucesso"
  }
  ```
## 🔌 Link do AWS
##### Para acessar o usuarios precisa está logado.

 [API_Acaitaria-Toka_Joia](http://ec2-18-230-151-189.sa-east-1.compute.amazonaws.com:3000/usuarios)

## 😊 Desenvolvido por

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/OsleneCerqueira"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100585368?v=4" width="100px;" alt=""/><br /><sub><b>Oslene Cerqueira</b></sub></a><br /><a href="https://github.com/OsleneCerqueira" title="Oslene">👑</a></td>
  </tr>
