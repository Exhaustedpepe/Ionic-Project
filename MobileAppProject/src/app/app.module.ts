import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { DbtestComponent } from './dbtest/dbtest.component';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, DbtestComponent],
  entryComponents: [],
  imports: [ CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [FormBuilder, NativeGeocoder, NavController, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
