import { Category } from "../model/Category";
import { ICategoriesRespository, ICreateCategoryDTO } from "./ICategoriesRepository";

export class PostgresCategoriesRepository implements ICategoriesRespository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
    list(): Category[] {
        return null;
    }
};