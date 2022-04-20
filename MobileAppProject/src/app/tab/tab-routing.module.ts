import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsPage } from '../restaurant-details/restaurant-details.page';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        
        

      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../add-page/add-page.module').then(m => m.AddPagePageModule)
      },
      {
            path: 'restaurant-details/:id',
            loadChildren: () => import('../restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsPageModule)
      },
    
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
