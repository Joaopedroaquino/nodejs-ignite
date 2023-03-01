import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) { };
    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    };
};