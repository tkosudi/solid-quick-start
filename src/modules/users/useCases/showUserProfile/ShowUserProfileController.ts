import { Request, Response } from "express";


import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.params.user_id
      
      const user = this.showUserProfileUseCase.execute({user_id: id})

      return response.status(200).json(user)
    } catch (error) {
      const message = error.message ? error.message.toString() : error.toString()
      const statusCode = error.statusCode ? error.statusCode : 500
      return response.status(statusCode).json({ error: message })
    }
  }
}

export { ShowUserProfileController };
