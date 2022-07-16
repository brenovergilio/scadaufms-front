export interface Medicao {
  measurerID: string;
  timestamp: Date;
  values: Object[];
}

export enum TipoMedicao {
  TensoesCorrentes = 0,
  Potencias = 1,
  Consumos_Ativos = 2,
  Consumos_Reativos = 3,
  Demandas_Ativas = 4,
  Demandas_Reativas = 5,
  Fatores_Potencia = 6,
  Tabela = 7,
}