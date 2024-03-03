import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createMovie', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAllMovies();
      service.createMovie({
        title: 'Test Movie',
        year: 2021,
        genres: ['test'],
      });
      const afterCreate = service.getAllMovies();
      expect(afterCreate.length).toEqual(beforeCreate.length);
    });
  });

  describe('getAllMovies', () => {
    it('should return an array of all movies', () => {
      const result = service.getAllMovies();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getMovie', () => {
    it('should return a movie', () => {
      service.createMovie({
        title: 'Test Movie',
        year: 2021,
        genres: ['test'],
      });
      const result = service.getMovie(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getMovie(999);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
        expect(err.message).toBe('Movie with ID 999 not found.');
      }
    });
  });

  describe('updateMovie', () => {
    it('should update a movie', () => {
      service.createMovie({
        title: 'Test Movie',
        year: 2021,
        genres: ['test'],
      });
      service.updateMovie(1, {
        title: 'Updated Movie',
        year: 2022,
        genres: ['test'],
      });
      const result = service.getMovie(1);
      expect(result.title).toBe('Updated Movie');
      expect(result.year).toBe(2022);
    });

    it('should throw a NotFoundException', () => {
      try {
        service.updateMovie(999, {});
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('deleteMovie', () => {
    it('should delete a movie', () => {
      service.createMovie({
        title: 'Test Movie',
        year: 2021,
        genres: ['test'],
      });
      const allMovies = service.getAllMovies();
      service.deleteMovie(1);
      const afterDelete = service.getAllMovies();
      expect(afterDelete.length).toBeLessThan(allMovies.length);
    });

    it('should throw 404 error', () => {
      try {
        service.deleteMovie(999);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
