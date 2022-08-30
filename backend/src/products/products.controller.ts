import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // https://docs.nestjs.com/pipes
  @Get(':id')
  findProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findProduct(id);
  }
}
