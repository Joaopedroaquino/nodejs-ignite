import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
    name: string;
    description: string;

};
export interface ICategoriesRespository {
    findByName(name: string): Category;
    create({ name, description }: ICreateCategoryDTO): void;
    list(): Category[];
};
