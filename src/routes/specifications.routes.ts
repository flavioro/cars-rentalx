import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()
const specificatiosRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecificationService = new CreateSpecificationService(specificatiosRepository)

  createSpecificationService.execute({ name, description })

  return response.status(201).send()
})

// specificationsRoutes.get('/', (request, response) => {
//   const all = specificatiosRepository.list()

//   return response.json(all)
// })

export { specificationsRoutes }