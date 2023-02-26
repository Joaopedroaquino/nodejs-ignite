import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCatgoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body
    const categoryService = new CreateCatgoryService(categoriesRepository);

    categoryService.execute({name,description});

   


    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});


export { categoriesRoutes };