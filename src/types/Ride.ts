export default interface Ride {
  id: number;
  name: string;
  lastName: string;
  date: string;
  time: string;
  origin: string;
  destiny: string;
  money: number;
  places: number;
  users?: string[];
}
