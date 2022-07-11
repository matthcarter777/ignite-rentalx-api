import express from "express";

import { categoriesRoutes } from "./modules/routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3335, () => console.log("server is running!"));
