import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const findCategoryByName = categoriesRepository.findByName(name);

  if (findCategoryByName) {
    throw new Error("Category already exists");
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send("Category created!");
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.index();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
