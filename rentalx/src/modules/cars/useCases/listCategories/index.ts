import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUsecase = new ListCategoryUseCase(categoriesRepository);
export const listCategoryController = new ListCategoriesController(listCategoriesUsecase);