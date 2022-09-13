import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User()

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    })

    this.users.push(user)
    return user
  }

  findById(id: string): User | undefined {
    const foundUserByID = this.users.find(user => user.id === id)
    return foundUserByID
  }

  findByEmail(email: string): User | undefined {
    const emailExists = this.users.find(user => user.email === email)
    return emailExists
  }

  turnAdmin(receivedUser: User): User {
    const getUserIndex = this.users.findIndex(user => user === receivedUser)
    this.users[getUserIndex].admin = true
    return this.users[getUserIndex]
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
