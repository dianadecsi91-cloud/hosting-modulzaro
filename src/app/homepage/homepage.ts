import { Component, inject } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.sass',
})
export class Homepage {

  constructor(public service: FilmService){

  }

  film: Film = new Film();


  create(): void {
   
    this.service.writeData(this.film);

    this.film = new Film();
  }
}