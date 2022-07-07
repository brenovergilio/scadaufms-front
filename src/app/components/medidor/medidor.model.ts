export interface MedidorMD30 {
  id?: string;
  ip: string;
  name: string;
  port: number | null;
  rush?: Rush;
}

export interface Rush {
  hour?: number;
  minute?: number;
  interval?: number;
}