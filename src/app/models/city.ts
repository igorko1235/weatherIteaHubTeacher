export class City {
  // id: string;
  isActive: boolean;
  temperature: string;
  picture: string;
  // cityColor: string;
  name: string;
  // gender: string;
  // company: string;

  get upperCaseName() {
    return this.name.toUpperCase();
  }

  constructor(isActive: boolean, temperature: string, picture: string, name: string) {
    this.isActive = isActive;
    this.temperature = temperature;
    this.picture = picture;
    this.name = name;
  }
}
