export class TaxAzul {
  constructor(public demandaPonta: number | undefined, public demandaForaPonta: number | undefined, public consumoPonta: number | undefined, public consumoForaPonta: number | undefined) {}
}

export class TaxVerde {
  constructor(public demandaUnica: number | undefined, public consumoPonta: number | undefined, public consumoForaPonta: number | undefined) {}
}