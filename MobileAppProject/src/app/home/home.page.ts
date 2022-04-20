import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Restaurant } from '../services/restaurants';
// import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  restaurantsList: Restaurant[] =[];
  constructor(private dbService: DbService){}
  
  async ngOnInit() {
   
    await this.dbService.init()
    
  }

  async ionViewWillEnter() {
    
    const restaurants = await this.dbService.getrestaurants()
    this.restaurantsList = restaurants
    console.log(this.restaurantsList)
  }
}
