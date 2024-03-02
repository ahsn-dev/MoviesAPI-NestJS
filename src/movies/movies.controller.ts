import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies(): string {
    return 'This will return all movies!';
  }

  @Get(':id')
  getOneMovie(@Param('id') movieID: string): string {
    return `This will return one movie with id ${movieID}!`;
  }

  @Post()
  createMovie(): string {
    return 'This will create a movie!';
  }

  @Patch(':id')
  updateMovie(@Param('id') movieID: string): string {
    return `This will update a movie with id ${movieID}!`;
  }

  @Delete(':id')
  deleteMovie(@Param('id') movieID: string): string {
    return `This will delete a movie with id ${movieID}!`;
  }
}
