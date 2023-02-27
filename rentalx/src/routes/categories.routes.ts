import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';
import { ListCategoryUseCase } from '../modules/cars/useCases/createCategory/ListCategoryUseCase';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {
    const categoryService = new ListCategoryUseCase(categoriesRepository)
    return response.json(categoryService);
});
