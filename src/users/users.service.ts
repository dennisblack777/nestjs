import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  api = `https://dummyjson.com`;

  constructor(private readonly httpService: HttpService) {}

  create(createUserDto: CreateUserDto): Observable<AxiosResponse> {
    return this.httpService
      .post(`${this.api}/users/add`, createUserDto)
      .pipe(map((response) => response.data));
  }

  findAll(): Observable<AxiosResponse<User[]>> {
    return this.httpService
      .get(`${this.api}/users`)
      .pipe(map((response) => response.data));
  }

  findOne(id: number): Observable<AxiosResponse<User>> {
    return this.httpService
      .get(`${this.api}/users/${id}`)
      .pipe(map((response) => response.data));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number): Observable<AxiosResponse> {
    return this.httpService
      .delete(`${this.api}/users/${id}`)
      .pipe(map((response) => response.data));
  }
}
