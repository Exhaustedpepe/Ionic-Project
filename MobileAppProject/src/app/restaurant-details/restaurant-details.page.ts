import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ViewWillEnter } from '@ionic/angular';
import { DbService } from '../services/db.service';
import { Restaurant } from '../services/restaurants';
import { Geolocation } from '@capacitor/geolocation';
import { MapGeocoder } from '@angular/google-maps';
import { NavController } from '@ionic/angular';

declare var google: any;
@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit, ViewWillEnter {
  restaurant: Restaurant;
  latitude: number;
  longitude: number;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  public map: any;
  public markers: any[] = [];
  constructor(private geocoder: MapGeocoder,
     private platform: Platform,
      private db: DbService, 
      private router: Router,
       private routeData: ActivatedRoute,
       private navController: NavController) { 
    db.getRestaurantById(routeData.snapshot.params.id).then(restaurant => {
      this.restaurant = restaurant
      this.geocoder.geocode({address: this.restaurant.address})
    .subscribe(({results})=>{
      this.latitude = results[0].geometry.location.lat()
      this.longitude = results[0].geometry.location.lng()
      console.log(this.latitude)
      this.platform.ready().then(() => {
        this.createMap();
      });
    })
      
    });
    
  }

  async ngOnInit() {
    await this.db.init();
    
  }
  async ionViewWillEnter(){  
    
   
    
  }
  
 
  
  
 
  
  options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 1000
  }
  async getLocation(){
   
  }
  async createMap(){
      
     
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);
      let options = {
        center: latLng,
        zoom: 15,
        
      }
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      this.addMarker(this.latitude, this.longitude)
      
      
    }
    public addMarker(lat: number, lng: number): void {
      let latLng = new google.maps.LatLng(lat, lng);
      let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });
      this.markers.push(marker);
  }
  

}
