import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Restaurant } from './restaurants';
import restaurants from '../data/restaurants'

/*
let restaurants: Restaurant[] = [
  {
      id: 1,
      restaurant_name: "Osmows", 
      address: "263 Augusta Ave", 
      description: "Shawarma and falafel take out", 
      
  },
  { 
      id: 2,
      restaurant_name: "789 Pizza", 
      address: "789 College St", 
      description: "Dank pizza, open late", 
  },
  {
      id: 3,
      restaurant_name: "Burger Dude", 
      address: "50 Oxford Ave", 
      description: "Huge burgers and massive combos, dude", 
  }
]
*/
@Injectable({
  providedIn: 'root'
})
export class DbService {
    private _storage: Storage | null = null;

    constructor(public storage: Storage) {
      this.init();
    }
  
    async init() {
      const storage = await this.storage.create();
      storage.clear()
      this._storage = storage;
    }
    async getrestaurants() {
      let restaurantsList = await this._storage?.get('restaurants');
      if(!restaurantsList) {
        await this._storage?.set('restaurants', JSON.stringify(restaurants))
        console.log(restaurants)
        return restaurants
      }
      return JSON.parse(restaurantsList)
    }
  
    async getRestaurantById(id: number) {
      const restaurants = await this.getrestaurants();
      return restaurants.find(f => f.id == id)
    }
  
    async updateRestaurant(restaurant: Restaurant) {
      let restaurantsList = await this.getrestaurants();
      restaurantsList[restaurantsList.findIndex(r => r.id === restaurant.id)] = restaurant;
      await this._storage?.set('restaurants', JSON.stringify(restaurantsList));
    }
  
    async deleteRestaurantById(id: number) {
      let restaurantsList = await this.getrestaurants();
      restaurantsList.splice(restaurantsList.findIndex(r => r.id === id), 1);
      await this._storage?.set('restaurants', JSON.stringify(restaurantsList));
    }
  
    async addRestaurant(restaurant: Restaurant) {
      let restaurantsList = await this.getrestaurants();
      restaurant = {id: restaurantsList[restaurantsList.length - 1].id + 1, ...restaurant}
      restaurantsList.push(restaurant);
      await this._storage?.set('restaurants', JSON.stringify(restaurantsList));
    }
  
    
    
}