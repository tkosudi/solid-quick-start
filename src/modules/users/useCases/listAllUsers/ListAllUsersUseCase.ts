import { AppError } from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id } : IRequest): User[] {
    const findUser = this.usersRepository.findById(user_id)

    if (!findUser) {
      throw new AppError('User not found!', 400)
    }
    
    if (!findUser.admin) {
      throw new AppError('You are not allowed!', 400 )
    }

    const users = this.usersRepository.list()
    return users
  }
}

export { ListAllUsersUseCase };
