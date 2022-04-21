import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Restaurant } from '../services/restaurants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {
  editForm: FormGroup;
  restaurant: Restaurant;

  constructor(private dbService: DbService, 
    public formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute) { 
    dbService.getRestaurantById(actRoute.snapshot.params.id).then(restaurant => {
     
      this.restaurant = restaurant
      this.editForm = this.formBuilder.group({
        id: [this.restaurant.id],
        restaurant_name: [this.restaurant.restaurant_name],
        address: [this.restaurant.address],
        rating: [this.restaurant.rating],
        tags: [this.restaurant.tags],
        description: [this.restaurant.description],
      })
    })
  }

  async ngOnInit() {
    await this.dbService.init()
    
  }
  
  onSubmit() {
    this.dbService.updateRestaurant({...this.editForm.value})
    this.router.navigate([''])
  }
  deleteRestaurant(id){
    this.dbService.deleteRestaurantById(id)
    this.router.navigate([''])
  }

}
