import { container } from "tsyringe";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository";


container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

