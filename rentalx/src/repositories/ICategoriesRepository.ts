import { Category } from "../model/Category";

export interface ICategoriesRespository {
    findByname(name: string): Category;
    create(name: string, description: string): void;
    list(): Category[]
}
