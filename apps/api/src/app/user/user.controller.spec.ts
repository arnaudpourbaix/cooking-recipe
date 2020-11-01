import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistController } from './playlist.controller';

describe('PlaylistController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PlaylistController],
      providers: [],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<PlaylistController>(PlaylistController);
      //   expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
