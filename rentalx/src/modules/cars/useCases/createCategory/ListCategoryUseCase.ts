import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) { };
    execute(): void {
        const all = this.categoriesRepository.list();
    };
};