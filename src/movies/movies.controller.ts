import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies!';
  }

  @Get('search')
  searchMovie(@Query('year') searchingYear: string): string {
    return `We are searching for a movie that made in ${searchingYear}`;
  }

  @Get(':id')
  getOneMovie(@Param('id') movieID: string): string {
    return `This will return one movie with id ${movieID}!`;
  }

  @Post()
  createMovie(@Body() createMovieData): string {
    return createMovieData;
  }

  @Patch(':id')
  updateMovie(@Param('id') movieID: string, @Body() updateMovieData): string {
    return {
      updatedMovie: movieID,
      ...updateMovieData,
    };
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieID: string): string {
    return `This will delete a movie with id ${movieID}!`;
  }
}
