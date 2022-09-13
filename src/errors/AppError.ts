export class AppError {
  message: string
  param?: string
  statusCode: number

  constructor(message, statusCode = 400) {
    console.log(message)
    this.message = message
    this.statusCode = statusCode
  }
}