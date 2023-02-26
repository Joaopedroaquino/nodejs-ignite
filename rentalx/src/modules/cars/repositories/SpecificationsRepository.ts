import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): void {
    }

}