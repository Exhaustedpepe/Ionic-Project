import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbtestComponent } from './dbtest/dbtest.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'dbtest',
    loadChildren: () => import('./dbtest/dbtest.component').then( m => m.DbtestComponent)
  },
  {
    path: 'maptest',
    loadChildren: () => import('./maptest/maptest').then( m => m.MapTest)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
