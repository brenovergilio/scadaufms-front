import { DateTime } from "luxon";

export interface Feriado {
  id?: number;
  name: string;
  day: DateTime;
}