export interface Medicao {
  measurerID: string;
  timestamp: Date;
  values: Map<string, number>;
}