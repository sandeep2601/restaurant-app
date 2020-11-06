import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  url = 'http://localhost:3000/restaurants';
  constructor(private httpService: HttpClient) {}
  getList() {
    return this.httpService.get(this.url);
  }
}
