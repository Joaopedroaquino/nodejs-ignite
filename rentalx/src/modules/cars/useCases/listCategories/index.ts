import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository =  CategoriesRepository.getInstance();
const listCategoriesUsecase = new ListCategoryUseCase(categoriesRepository);
export const listCategoryController = new ListCategoriesController(listCategoriesUsecase);