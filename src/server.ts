import express from "express";

import { categoriesRoutes } from "./modules/routes/categories.routes";
import { specificationsRoutes } from "./modules/routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3335, () => console.log("server is running!"));
