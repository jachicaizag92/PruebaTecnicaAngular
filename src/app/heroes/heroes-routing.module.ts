import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '', component: LayoutPageComponent, children: [
      { path: 'search', component: SearchPageComponent },
      { path: 'new-hero', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
