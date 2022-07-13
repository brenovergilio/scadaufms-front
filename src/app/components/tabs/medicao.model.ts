export interface Medicao {
  measurerID: string;
  timestamp: Date;
  values: Object[];
}

export enum TipoMedicao {
  Tensoes = 0,
  Correntes = 1,
  Potencias_Ativas = 2,
  Potencias_Reativas = 3,
  Consumos_Ativos = 4,
  Consumos_Reativos = 5,
  Demandas_Ativas = 6,
  Demandas_Reativas = 7
}