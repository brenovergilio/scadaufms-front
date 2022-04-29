export interface AcceptedFormat {
  name: string | Date;
  series: Array<Series>;
}

export interface Series {
  name: string | Date;
  value: number;
}