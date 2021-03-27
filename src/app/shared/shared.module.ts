import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from './../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoadingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
