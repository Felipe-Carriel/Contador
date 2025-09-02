import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule
  ],
  bootstrap: [App]
})
export class AppModule {}
