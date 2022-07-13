export interface AcceptedFormatLineChart {
  name: string | Date;
  series: Array<Series>;
}

export interface AcceptedFormatBarChart {
  name: string | Date;
  value: number;
  extra: Extra
}

export interface Series {
  name: string | Date;
  value: number;
}

export interface Extra {
  displayName: string;
}