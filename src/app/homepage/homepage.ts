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

  constructor(public service: FilmService) { }

  film: Film = new Film();


  create() {
  console.log("Küldendő adat:", this.film); // Ellenőrizd a konzolban (F12), hogy itt látsz-e értékeket!
  
  if (this.film.title && this.film.title !== "") {
    this.service.writeData(this.film).then(() => {
      console.log("Sikeres mentés!");
      this.film = new Film(); // Az űrlap alaphelyzetbe állítása
    });
  } else {
    alert("Kérlek, add meg a film címét!");
  }
}
async loadFilms() {
  const snapshot = await this.service.readData(); // A korábban írt readData metódus
  if (snapshot.exists()) {
    this.service.films = Object.values(snapshot.val());
  }
}
}
