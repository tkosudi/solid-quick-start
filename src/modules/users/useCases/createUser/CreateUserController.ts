import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body

      const res = this.createUserUseCase.execute({name, email})

      return response.status(201).json(res)
    } catch (error) {
      const message = error.message ? error.message.toString() : error.toString()
      const statusCode = error.statusCode ? error.statusCode : 500
      return response.status(statusCode).json({ error: message })
    }
  }
}

export { CreateUserController };
