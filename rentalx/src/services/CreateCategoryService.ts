import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
};
export class CreateCatgoryService {
    constructor(private categoriesRepository: CategoriesRepository) { }
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        };
        this.categoriesRepository.create({ name, description });
    };
};