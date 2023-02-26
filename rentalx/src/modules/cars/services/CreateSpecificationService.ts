import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

export interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationsRepository) { };
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
        if(specificationAlreadyExists){
            throw new Error("Specification already exists!")
        }
        this.specificationRepository.create({ name, description });

    };
};