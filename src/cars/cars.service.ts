import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Honda',
      model: 'corolla',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'chererook',
    },
  ];
  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
