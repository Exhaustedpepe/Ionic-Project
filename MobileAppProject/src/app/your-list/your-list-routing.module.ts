import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourListPage } from './your-list.page';

const routes: Routes = [
  {
    path: '',
    component: YourListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourListPageRoutingModule {}
