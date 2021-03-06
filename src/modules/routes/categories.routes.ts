import { Router } from "express";

import { CategoriesRepository } from "../cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send("Category created!");
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
