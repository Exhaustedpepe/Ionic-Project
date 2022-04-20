import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Restaurant } from '../services/restaurants';



@Component({
  selector: 'app-dbtest',
  templateUrl: './dbtest.component.html',
  styleUrls: ['./dbtest.component.scss'],
})
export class DbtestComponent implements OnInit, ViewWillEnter{
  restaurantsList: Restaurant[] =[];
  constructor(private dbService: DbService){}
  
  async ngOnInit() {
    // TODO: Fix This, gets called too many times, not efficient
    await this.dbService.init()
    
  }

  async ionViewWillEnter() {
    
    const restaurants = await this.dbService.getrestaurants()
    this.restaurantsList = restaurants
    console.log(this.restaurantsList)
  }
  
}

