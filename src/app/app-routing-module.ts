import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rating } from './rating/rating';
import { Homepage } from './homepage/homepage';
import { List } from './list/list';

const routes: Routes = [
  {path: "rating", component: Rating},
  { path: 'homepage', component: Homepage },
  { path: 'list', component: List },
  {path: "", redirectTo: "homepage", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
