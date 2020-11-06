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

  saveData(data) {
    return this.httpService.post(this.url, data);
  }

  deleteRestaurant(id) {
    return this.httpService.delete(`${this.url}/${id}`);
  }

  getCurrentRestaurant(id) {
    return this.httpService.get(`${this.url}/${id}`);
  }

  updateRestaurant(id, data) {
    return this.httpService.put(`${this.url}/${id}`, data);
  }
}
