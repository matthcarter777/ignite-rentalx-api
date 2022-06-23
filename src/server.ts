import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "ok" });
});

app.post("/courses", (request: Request, response: Response) => {
  const { name } = request.body;
  console.log(name);

  return response.json({ name });
});

app.listen(3333, () => console.log("server is running!"));
