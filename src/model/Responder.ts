export class Responder {
  constructor(
    public id: string,
    public name: string,
    public type: "POLICE" | "FIRE" | "MEDICAL" | "RESCUE",
    public phone: string,
    public status: "ACTIVE" | "BUSY" | "INACTIVE",
    public latitude?: number,
    public longitude?: number,
    public last_location_update?: Date,
  ) {}

  isAvailable(): boolean {
    return this.status === "ACTIVE";
  }
}
