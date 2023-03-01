import { Request, Response } from "express";
import { Category } from "../../model/Category";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoriesController {
    constructor(private listCategoriesUsecase: ListCategoryUseCase){};
    handle(request:Request, response: Response): Category[]{
        const categories = this.listCategoriesUsecase.execute();
        return categories;
    }
}