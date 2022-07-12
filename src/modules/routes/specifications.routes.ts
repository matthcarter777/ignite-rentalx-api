import { Router } from "express";

import { SpecificationsRepository } from "../cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send("Specification created!");
});

specificationsRoutes.get("/", (request, response) => {
  const categories = specificationsRepository.index();

  return response.status(200).json(categories);
});

export { specificationsRoutes };
