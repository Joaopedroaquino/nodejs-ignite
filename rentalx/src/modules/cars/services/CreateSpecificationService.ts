import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

export interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationService {
    constructor(private specificationRepository: SpecificationsRepository) { };
    execute({ name, description }: IRequest): void {
        this.specificationRepository.create({ name, description });

    };
};