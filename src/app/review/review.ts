import { Component, OnInit} from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.html',
  styleUrl: './review.sass',
})
export class Review implements OnInit{
  filmId: string = '';
  author: string = '';
  text: string = '';
  rating: number = 0;

  constructor(public service: FilmService) {}

  ngOnInit() {
    this.filmId = this.service.selectedFilmId;
  }
  saveReview() {
    
    const reviewData = {
      filmId: this.filmId,
      author: this.author,
      text: this.text,
      rating: this.rating
    };
    console.log("Mentendő adat:", reviewData);
  }
}
