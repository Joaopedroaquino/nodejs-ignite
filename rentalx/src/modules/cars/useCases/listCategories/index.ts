import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUsecase = new ListCategoryUseCase(categoriesRepository);
export const listCategoryController = new ListCategoriesController(listCategoriesUsecase);