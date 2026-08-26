import { Responder } from "../model/Responder";
import { User } from "../model/User";

export class AuthService {
  // Method to handle User Registration
  async registerUser(
    name: string,
    email: string,
    phone: string,
  ): Promise<User> {
    console.log(`Registering User: ${name}`);
    // Simulate Database Insert
    return new User("u123", name, phone, email);
  }

  // Method to handle Responder Registration
  async registerResponder(
    name: string,
    type: "POLICE" | "FIRE" | "MEDICAL" | "RESCUE",
    phone: string,
  ): Promise<Responder> {
    console.log(`Registering Responder: ${name} [${type}]`);
    // Simulate Database Insert
    return new Responder("r123", name, type, phone, "INACTIVE");
  }

  // Unified Login Method
  async login(
    emailOrPhone: string,
    role: "USER" | "RESPONDER",
  ): Promise<User | Responder> {
    console.log(`Authenticating ${role} with identifier: ${emailOrPhone}`);
    if (role === "USER") {
      return new User("u123", "John Doe", emailOrPhone, "user@test.com");
    } else {
      return new Responder(
        "r123",
        "Rescue Team Alpha",
        "RESCUE",
        emailOrPhone,
        "ACTIVE",
      );
    }
  }
}

export const authService = new AuthService();
