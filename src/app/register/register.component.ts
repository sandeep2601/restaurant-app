import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private restaurantData: RestaurantService) { }

  ngOnInit(): void {
  }

  registerData() {
    console.log(this.register.value);
    this.restaurantData.registerUser(this.register.value).subscribe((result) => {
      console.log(result);
      this.alert = true;
    })
  }

  closeAlert() {
    this.alert = false;
  }

}
