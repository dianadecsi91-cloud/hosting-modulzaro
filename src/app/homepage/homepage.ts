import { Component} from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.sass',
})
export class Homepage {

  film: Film = new Film();

  constructor(public service: FilmService) { }

  create() {
    
      
      this.service.writeData(this.film).then(() => {
       
        this.film = new Film(); 
      });
      
  }
async loadFilms() {
  const snapshot = await this.service.readData(); 
  if (snapshot.exists()) {
    this.service.films = Object.values(snapshot.val());
  }
}
async ngOnInit() {
  this.service.films = await this.service.getFilms();
}

get validation(): boolean {
    if (!this.film.title || this.film.title.length < 1) return false;
    if (!this.film.genre || this.film.genre.length < 1) return false;
    if (!this.film.date || this.film.date < 1111) return false;

    return true;
  }
}
