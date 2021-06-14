import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpInterceptorProviders} from './shared/interceptors/interceptors';
import { AuthorisedComponent } from './shared/component/layouts/authorised/authorised.component';
import { SharedComponentModuleModule } from './shared/component/shared-component-module.module';
import { HomeModule } from './components/home/home.module';
import { ItemModule } from './components/item/item.module';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorisedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    SharedComponentModuleModule,
    HomeModule,
    ItemModule,
    AuthModule
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
