import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) { }

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExist = this.specificationRepository.findByName(
      name
    )

    if (specificationAlreadyExist) {
      throw new Error('Category already exists!')
    }

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationService }