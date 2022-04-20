import { Component, ElementRef, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';


declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'maptest.html',
  styleUrls: ['maptest.scss'],
})
export class MapTest {
 
 
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  public map: any;
  public markers: any[] = [];
  
  constructor(private platform: Platform) {

  }
  
  ngOnInit(){
    this.platform.ready().then(() => {
      this.createMap()
    })
    
   
  }
  options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 1000
  }
  async createMap(){
      Geolocation.getCurrentPosition(this.options).then((position) => {
      console.log(position.coords.latitude)
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let options = {
        center: latLng,
        zoom: 15,
        
      }
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      this.addMarker(position.coords.latitude, position.coords.longitude)
      })
      
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
    



      
    
   
    
    
    
    
  
  

  
