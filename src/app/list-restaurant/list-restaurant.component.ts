import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
})
export class ListRestaurantComponent implements OnInit {
  constructor(private restaurantData: RestaurantService) {}
  collection = {};
  ngOnInit(): void {
    this.restaurantData.getList().subscribe((result) => {
      this.collection = result;
      console.log('result', result);
    });
  }
}
