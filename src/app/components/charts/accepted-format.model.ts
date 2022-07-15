export interface AcceptedFormatLineChart {
  name: string | Date;
  series: Array<Series>;
}

export interface AcceptedFormatBarChart extends Series{}

export interface Series {
  name: string | Date;
  value: number;
}