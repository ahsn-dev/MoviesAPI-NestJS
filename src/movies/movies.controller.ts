import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
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
  getOneMovie(@Param('id') movieID: number): Movie {
    return this.moviesService.getMovie(movieID);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Patch(':id')
  updateMovie(@Param('id') movieID: number, @Body() updateMovieData): string {
    return {
      updatedMovie: movieID,
      ...updateMovieData,
    };
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieID: number) {
    return this.moviesService.deleteMovie(movieID);
  }
}
