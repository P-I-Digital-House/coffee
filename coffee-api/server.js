import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", (request, response) => {
  const products = [{ description: "test" }];
  response.json(products);
});

app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body.Validade);
  //tratar os dados para salvar no banco
  response.json(body);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const body = request.body;
  console.log(body);
  response.json({ body: body, id: id, message: "sucesso" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  //tratar os dados para salvar no banco
  response.json({ message: "Foi Apagado" });
});

app.listen(3000);
