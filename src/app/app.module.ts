import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CustomerComponent} from './customer/customer.component';
import {CustomersComponent} from './customer/customers.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
