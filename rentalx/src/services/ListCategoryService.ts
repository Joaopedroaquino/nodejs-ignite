import { CategoriesRepository } from "../repositories/CategoriesRepository";

export class ListCategoryService{
    constructor(private categoriesRepository: CategoriesRepository){}
    execute():void{
        const all = this.categoriesRepository.list();
    }
}