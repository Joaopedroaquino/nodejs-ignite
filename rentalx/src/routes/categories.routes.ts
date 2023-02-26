import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCatgoryService } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';
import { ListCategoryService } from '../modules/cars/services/ListCategoryService';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body
    const categoryService = new CreateCatgoryService(categoriesRepository);
    categoryService.execute({name,description});
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const categoryService = new ListCategoryService(categoriesRepository)
    return response.json(categoryService);
});
