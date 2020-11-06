import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  alert: boolean = false;
  constructor(private saveService: RestaurantService) {}
  ngOnInit(): void {}

  addData() {
    this.saveService.saveData(this.addRestaurant.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurant.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
