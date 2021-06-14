import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { SharedComponentModuleModule } from '../../shared/component/shared-component-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedComponentModuleModule,
    FormsModule, 
    ReactiveFormsModule 
  ]
})
export class ItemModule { }
