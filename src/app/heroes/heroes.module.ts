import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';



@NgModule({
  declarations: [
    SearchPageComponent,
    NewPageComponent,
    ListPageComponent,
    LayoutPageComponent,
    CardHeroComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
