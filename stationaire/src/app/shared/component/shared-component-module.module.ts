import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormGroupComponent } from './forms/form-group/form-group.component';
import { ValidationMsgComponent } from './forms/validation-msg/validation-msg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './layouts/navigation/navigation.component';

@NgModule({
  declarations: [
    UserComponent,
    FormGroupComponent,
    ValidationMsgComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent,
    FormGroupComponent,
    ValidationMsgComponent,
    NavigationComponent
  ],
})
export class SharedComponentModuleModule {}
