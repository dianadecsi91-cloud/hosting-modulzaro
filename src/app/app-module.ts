import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Creat } from './creat/creat';
import { Homepage } from './homepage/homepage';
import { Rating } from './rating/rating';
import { List } from './list/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Creat, Homepage, Rating, List],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  
})
export class AppModule {}
