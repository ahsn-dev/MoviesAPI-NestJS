import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  //   @Get('search')
  //   searchMovie(@Query('year') searchingYear: string): string {
  //     return `We are searching for a movie that made in ${searchingYear}`;
  //   }

  @Get(':id')
  getOneMovie(@Param('id') movieID: string): Movie {
    return this.moviesService.getOneMovie(movieID);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Patch(':id')
  updateMovie(@Param('id') movieID: string, @Body() updateMovieData): string {
    return {
      updatedMovie: movieID,
      ...updateMovieData,
    };
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieID: string) {
    return this.moviesService.deleteMovie(movieID);
  }
}
