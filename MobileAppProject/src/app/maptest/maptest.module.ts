import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MapTest } from './maptest';


import { MapTestRoutingModule } from './home-routing.module';
import { HomePage } from '../home/home.page';
import { TabPage } from '../tab/tab.page';

//import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapTestRoutingModule
  ],
  declarations: [MapTest, HomePage, TabPage]
 
  
})
export class MapTestModule {}
