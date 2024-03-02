import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getOneMovie(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  createMovie(movieData: Movie): Movie {
    const newMovie = {
      id: this.movies.length + 1,
      ...movieData,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  deleteMovie(id: string): boolean {
    this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
