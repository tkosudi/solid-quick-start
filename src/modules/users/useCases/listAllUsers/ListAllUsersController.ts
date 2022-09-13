import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id.toString()
      
      const allUsers = this.listAllUsersUseCase.execute({user_id})

      return response.status(200).json(allUsers)
    } catch (error) {
      const message = error.message ? error.message.toString() : error.toString()
      const statusCode = error.statusCode ? error.statusCode : 500
      return response.status(statusCode).json({ error: message })
    }
  }
}

export { ListAllUsersController };
