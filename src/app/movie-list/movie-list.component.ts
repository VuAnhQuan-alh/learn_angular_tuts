import { Component, OnInit } from '@angular/core';
import { MovieService } from '../data.service';
import { TypeMovies } from '../data.type';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: TypeMovies[];
  constructor(private movieSer: MovieService) {}

  ngOnInit() {}

  list() {
    this.movieSer.list().subscribe(data => {
      this.movies = data;
    });
  }
}
