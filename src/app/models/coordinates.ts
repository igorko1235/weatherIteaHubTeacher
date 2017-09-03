export class Coordinates {
  lon: number;
  lat: number;
  setCoordinates(lon: number, lat: number) {
    this.lon = lon;
    this.lat = lat;
  }
  constructor(lon: number, lat: number) {
    this.setCoordinates(lon, lat);
  }
}
