import { Component, OnChanges, OnInit, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Restaurant } from '../services/restaurants';
// import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter, ViewWillLeave {
  loaded = false;
  restaurantsList: any[] =[];
  constructor(private dbService: DbService, private router: Router){
    
  }
  
  async ngOnInit() {
   
    await this.dbService.init()
    
    
  }

  async ionViewWillEnter() {
    const restaurants =  await this.dbService.getrestaurants()
    this.restaurantsList = restaurants
    this.loaded = true;
    
  }
  async ionViewWillLeave(){
    this.restaurantsList = [];
  }
}
