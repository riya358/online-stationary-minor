import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedComponentModuleModule } from '../../shared/component/shared-component-module.module';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ListItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentModuleModule,
    FormsModule, 
    ReactiveFormsModule 
  ]
})
export class HomeModule { }
