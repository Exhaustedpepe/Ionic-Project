import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbtestComponent } from './dbtest/dbtest.component';

const routes: Routes = [
  {
    path: 'maptest',
    loadChildren: () => import('./maptest/maptest.module').then( m => m.MapTestModule)
  },
  {
    path: 'dbtest',
    component: DbtestComponent
  },
  {
    path: '',
    redirectTo: 'dbtest',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
