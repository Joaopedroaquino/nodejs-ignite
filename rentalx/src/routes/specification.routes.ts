import { request, response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

export const specificationRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response)=>{
    const {name, description} = request.body;
    const specificationService = new CreateSpecificationUseCase(specificationRepository);
    specificationService.execute({name,description});
    return response.status(201).send();

});