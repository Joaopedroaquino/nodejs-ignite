import { request, response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

export const specificationRoutes = Router();

specificationRoutes.post("/", (request, response)=>{

    return createSpecificationController.handle(request, response)
  

});