export interface MedidorMD30 {
  id?: string;
  ip: string;
  name: string;
  port: number | null;
  rush_hour?: number;
  rush_minute?: number;
  rush_interval?: number;
}