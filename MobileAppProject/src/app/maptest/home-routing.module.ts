import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapTest } from './maptest';

const routes: Routes = [
  {
    path: '',
    component: MapTest,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapTestRoutingModule {}
