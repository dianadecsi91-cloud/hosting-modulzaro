import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Creat } from './creat/creat';
import { Homepage } from './homepage/homepage';
import { List } from './list/list';
import { FormsModule } from '@angular/forms';
import { Review } from './review/review';
import { FilmService } from './film.service';

@NgModule({
  declarations: [App, Creat, Homepage, List, Review],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FilmService],
  bootstrap: [App],
})
export class AppModule {}
