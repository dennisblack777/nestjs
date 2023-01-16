import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  api = `https://dummyjson.com`;

  constructor(private readonly httpService: HttpService) {}

  create(createUserDto: CreateProductDto): Observable<AxiosResponse> {
    return this.httpService
      .post(`${this.api}/products/add`, createUserDto)
      .pipe(map((response) => response.data));
  }

  findAll(): Observable<AxiosResponse<Product[]>> {
    return this.httpService
      .get(`${this.api}/products`)
      .pipe(map((response) => response.data));
  }

  findOne(id: number): Observable<AxiosResponse<Product>> {
    return this.httpService
      .get(`${this.api}/products/${id}`)
      .pipe(map((response) => response.data));
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Observable<AxiosResponse> {
    return this.httpService
      .put(`${this.api}/products/${id}`, updateProductDto)
      .pipe(map((response) => response.data));
  }

  remove(id: number): Observable<AxiosResponse> {
    return this.httpService
      .delete(`${this.api}/products/${id}`)
      .pipe(map((response) => response.data));
  }
}
