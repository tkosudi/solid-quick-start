import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlreadyExists = this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new AppError('Email already exists!', 400)
    }
    
    return this.usersRepository.create({name, email})
  }
}

export { CreateUserUseCase };
