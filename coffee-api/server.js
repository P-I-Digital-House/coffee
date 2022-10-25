const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors())

app.get("/products", (request, response) => {
  const products = [
    {
       "id":1,
       "name":"CAFÉ GOURMET ESPECIAL",
       "description":"Café de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":2,
       "name":"CAFÉ GOURMET ESPECIAL",
       "description":"Café de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":3,
       "name":"CAFÉ GOURMET ESPECIAL",
       "description":"Café de alta qualidade fabricado para atender aos clientes mais exigentes",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":4,
       "name":"XÍCARA E PIRES MANDALA",
       "description":"A legítima porcelana desde 1945",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":5,
       "name":"XÍCARA E PIRES VERMELHO",
       "description":"Produto de Alta Qualidade, Beleza e Resistência",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":6,
       "name":"XÍCARA E PIRES BRANCO CLÁSSICO",
       "description":"Modelo Octogonal Prisma",
       "price":"R$ 100,00",
       "available":true
    },
    {
       "id":7,
       "name":"PRENSA FRANCESA",
       "description":"Produzida em vidro borossilicato, mais forte e durável que o vidro convencional",
       "price":"R$ 50,00",
       "available":true
    },
    {
       "id":8,
       "name":"CAFETEIRA ITALIANA",
       "description":"Cafeteira expressa italiana em alumínio polido",
       "price":"R$ 50,00",
       "available":true
    },
    {
       "id":9,
       "name":"KIT COADOR",
       "description":"Mini Coador de Café Individual Bronze Pressca. Suporte em aço resistente. Refil de Algodão",
       "price":"R$ 80,00",
       "available":true
    }
  ] ;
  response.json(products);
});

app.get("/products/cafes", (request, response) => {
  const products = [
    {
      id: 1, 
      productName: "CAFÉ GOURMET ESPECIAL", 
      price: "R$ 100,00", 
      quantity: "340g",
      img: "../../src/assets/embalagem-cafe-1.png"
    },
    {
      id: 2, 
      productName: "CAFÉ GOURMET ESPECIAL", 
      price: "R$ 100,00", 
      quantity: "340g",
      img: "../../src/assets/embalagem-cafe-2.png"
    },
    {
      id: 3, 
      productName: "CAFÉ GOURMET ESPECIAL", 
      price: "R$ 100,00", 
      quantity: "340g",
      img: "../../src/assets/embalagem-cafe-3.png"
    }
  ];
  response.json(products);
});

app.get("/products/xicaras", (request, response) => {
  const products = [
    {
      id: 1, 
      productName: "XÍCARA E PIRES MANDALA", 
      price: "R$ 100,00", 
      quantity: "P, M E G",
      img: "../../src/assets/embalagem-cafe-1.png"
    },
    {
      id: 2, 
      productName: "XÍCARA E PIRES VERMELHO", 
      price: "R$ 100,00", 
      quantity: "P, M E G",
      img: "../../src/assets/xicara_2.png"
    },
    {
      id: 3, 
      productName: "XÍCARA E PIRES BRANCO CLÁSSICO", 
      price: "R$ 100,00", 
      quantity: "P, M E G",
      img: "../../src/assets/xicara_3.png"
    }
  ];
  response.json(products);
});

app.get("/products/acessorios", (request, response) => {
  const products = [
    {
      id: 1, 
      productName: "PRENSA FRANCESA", 
      price: "R$ 50,00", 
      quantity: "350ml",
      img: "../../src/assets/acessorio-1.png"
    },
    {
      id: 2, 
      productName: "CAFETERIA ITALIANA", 
      price: "R$ 50,00", 
      quantity: "500ml",
      img: "../../src/assets/acessorio-2.png"
    },
    {
      id: 3, 
      productName: "KIT COADOR", 
      price: "R$ 80,00", 
      quantity: "1 und",
      img: "../../src/assets/acessorio-3.png"
    }
  ];
  response.json(products);
});

app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body);
  //tratar os dados para salvar no banco
  response.json(body);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const body = request.body;
  console.log(body);
  response.json({ body: body, id: id, message: "Produto Atualizado com Sucesso!" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  //tratar os dados para salvar no banco
  response.json({ message: "Este Produto Foi Apagado!" });
});

app.listen(5000);
