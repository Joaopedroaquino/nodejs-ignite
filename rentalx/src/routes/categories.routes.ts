import { request, response, Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';
import { listCategoryController } from '../modules/cars/useCases/listCategories';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ListCategoryUseCase } from '../modules/cars/useCases/listCategories/ListCategoryUseCase';
import multer from 'multer';

export const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);

});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request,response)
   
});

categoriesRoutes.post("/import",upload.single("file"), (request, response)=>{
    const { file} = request;
    console.log(file);
    response.send();
}); 
