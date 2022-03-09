export interface CarsModel {
  id: any;
  carName: string;
  year: Date | string;
  fuel: string;
  price: number;
}

export interface ReservedCarsModel extends CarsModel {
  reservedDate: string;
}
