import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { component: AddRestaurantComponent, path: 'add' },
  { component: ListRestaurantComponent, path: 'list' },
  { component: UpdateRestaurantComponent, path: 'update/:id' },
  { component: RegisterComponent, path: 'register' },
  { component: ListRestaurantComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
