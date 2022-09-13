import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.params.user_id

      const res = this.turnUserAdminUseCase.execute({user_id: id})

      return response.status(200).json(res)
    } catch (error) {
      const message = error.message ? error.message.toString() : error.toString()
      const statusCode = error.statusCode ? error.statusCode : 500
      return response.status(statusCode).json({ error: message })
    }
  }
}

export { TurnUserAdminController };
