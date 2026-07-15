import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, push, Database } from 'firebase/database';
import { Film } from './film';


const firebaseConfig = {

  apiKey: "AIzaSyA4cgLR9TVjmuUaLAVoKw7ZT6IaGRGEO50",
  authDomain: "filmfeedback-6ddc5.firebaseapp.com",
  databaseURL: "https://filmfeedback-6ddc5-default-rtdb.firebaseio.com",
  projectId: "filmfeedback-6ddc5",
  storageBucket: "filmfeedback-6ddc5.firebasestorage.app",
  messagingSenderId: "593557148696",
  appId: "1:593557148696:web:b73f4daf4ae4f34938df6d",
  measurementId: "G-DFS5MNN9V0"
};

@Injectable({
  providedIn: 'root',
})

export class FilmService {
  path: string = "films";
  films: Film[] = [];
  private db: Database;

  constructor() {

    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
    this.readData().then(snapshot => {

      if (snapshot.exists()) {
        this.films = Object.values(snapshot.val());
        console.log("Beolvasott filmek sikeresen:", this.films);
      }
    });
  }

  writeData(film: any) {
  const dbRef = ref(this.db, 'films');

  const filmData = {
    title: film.title || "",
    genre: film.genre || "",
    date: film.date || "",
    image: film.image || "assets/images.jpg",
    rating: film.rating || 0,
    reviews: film.reviews || [] 
  };
  
  return push(dbRef, filmData)
}
  readData(): Promise<any> {
    const dbRef = ref(this.db, this.path);
    return get(dbRef);

  }

}