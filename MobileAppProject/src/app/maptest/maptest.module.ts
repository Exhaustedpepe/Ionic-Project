import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MapTest } from './maptest';

import { MapTestRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapTestRoutingModule
  ],
  declarations: [MapTest]
})
export class MapTestModule {}
