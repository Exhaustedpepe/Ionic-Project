import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourListPageRoutingModule } from './your-list-routing.module';

import { YourListPage } from './your-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourListPageRoutingModule
  ],
  declarations: [YourListPage]
})
export class YourListPageModule {}
