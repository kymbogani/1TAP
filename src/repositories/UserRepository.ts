import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../model/User";

export class UserRepository implements IUserRepository {
  // TODO: Inject Supabase client here later

  async findById(id: string): Promise<User | null> {
    // Simulated DB call
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    // Simulated DB call
    return null;
  }

  async create(user: User): Promise<User> {
    // Simulated DB insert
    console.log("Saving user to database:", user.name);
    return user;
  }

  async update(user: User): Promise<User> {
    // Simulated DB update
    return user;
  }
}
