import { Category } from "../model/Category";
import { ICategoriesRespository } from "./ICategoriesRepository";

export class PostgresCategoriesRepository implements ICategoriesRespository {
    findByname(name: string): Category {
        console.log(name);
        return null;
    }
    create(name: string, description: string): void {
        console.log(name, description);
    }
    list(): Category[] {
        return null;
    }
};