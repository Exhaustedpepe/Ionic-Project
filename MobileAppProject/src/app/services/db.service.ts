import { Injectable } from '@angular/core';
import { IonItemSliding, Platform } from '@ionic/angular';
import { Restaurant } from './restaurants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  restaurantList = new BehaviorSubject([]);
  private isDbRReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform:Platform, 
    private sqlite:SQLite, 
    private httpClient: HttpClient, 
    private sqlPorter: SQLitePorter
  ) { 
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name:'restaurantGuide.db',
        location:'default'
      }).then(
        (db:SQLiteObject)=>{
          this.storage = db,
          this.getFakeData();
          
        }
      );
    })


  }

  dbState() {
    return this.isDbRReady.asObservable();
  }

  fetchSongs(){
    return this.restaurantList.asObservable();
  }

  getFakeData(){
    this.httpClient.get('assets/dump.sql', {responseType: 'text'}).subscribe(data=>{
      this.sqlPorter.importSqlToDb(this.storage, data)
      .then(_=>{
        this.getRestaurants()
        this.isDbRReady.next(true);
      })
      .catch(error => console.error(error));
    });
  }
  getRestaurants(){
    return this.storage.executeSql('SELECT * FROM restaurants', []).then(res => {
      let items: Restaurant[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            restaurant_name: res.rows.item(i).restaurant_name,  
            address: res.rows.item(i).address,
            description: res.rows.item(i).description,
           });
        }
      }
      this.restaurantList.next(items);
    });
  }
  addRestaurant(restaurant_name, address, description){
    let data = [restaurant_name,address,description];
    return this.storage.executeSql('INSERT INTO restaurants(restaurant_name, address, description) VALUES(?,?,?)', data)
    .then(res=>{
      this.getRestaurants();
    })
  }
  getRestaurant(id): Promise<Restaurant>{
    return this.storage.executeSql('SELECT * FROM restaurants WHERE id = ?', [id])
    .then(
      res => {
        return{
          id: res.rows(0).id,
          restaurant_name: res.rows(0).restaurant_name,
          address: res.rows(0).address,
          description: res.rows(0).address,
        }
      }
    );
  }
  updateRestaurant(id, restaurant:Restaurant){
    let data = [restaurant.restaurant_name, restaurant.address, restaurant.description]
    return this.storage.executeSql(
      `UPDATE restaurants SET restaurant_name = ?, address = ?, description = ? WHERE id ${id}`, data)
      .then(
        data=> {
          this.getRestaurants();
        }
      )
    
  }
  deleteRestaurant(id){
    
    return this.storage.executeSql(
      `DELETE FROM restaurants WHERE id = ?`, [id])
      .then(
        res=> {
          this.getRestaurants();
        }
      )

  }

  


}