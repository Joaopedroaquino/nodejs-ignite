import { request, response, Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';
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
