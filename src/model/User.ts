export class User {
  constructor(
    public id: string,
    public name: string,
    public phone: string,
    public email: string,
    public age?: number,
    public address?: string,
    public barangay?: string,
    public created_at?: Date,
  ) {}

  // Example of an OOP method inside the model
  isProfileComplete(): boolean {
    return !!(this.age && this.address && this.barangay);
  }
}
