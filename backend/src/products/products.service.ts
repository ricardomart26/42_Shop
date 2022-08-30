import { Injectable } from '@nestjs/common';

const _date = Date.now();

const products = [
  {
    id: 0,
    name: 'Jacket',
    price: 20.0,
    date: _date,
    amount: 5,
    description: 'Wonderfull jacket from 42',
  },
  {
    id: 1,
    name: 'Towel',
    price: 5.0,
    date: _date,
    amount: 3,
    description: 'Wonderfull towel from 42',
  },
  {
    id: 2,
    name: 'Cup',
    price: 10.0,
    date: _date,
    amount: 10,
    description: 'Wonderfull Cup from 42',
  },
];

@Injectable()
export class ProductsService {
  findAll() {
    return products;
  }

  findProduct(id: number) {
    return products.find((prod) => prod.id === id);
  }
}
