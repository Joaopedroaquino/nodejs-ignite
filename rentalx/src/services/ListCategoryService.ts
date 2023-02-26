import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRespository } from "../modules/cars/repositories/ICategoriesRepository";

export class ListCategoryService {
    constructor(private categoriesRepository: ICategoriesRespository) { };
    execute(): void {
        const all = this.categoriesRepository.list();
    };
};