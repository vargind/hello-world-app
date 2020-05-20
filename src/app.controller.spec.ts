import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('health', () => {
    it('should return 200 (OK) status', () => {
      expect(appController.getHealth()).toBe('hello-world-app is operating as expected');
    });
  });

  describe('metadata', () => {
    it('should return metadata', () => {
      const metadata = appController.getMetadata();
      expect(metadata).toHaveProperty('appName', 'hello-world-app');
      expect(metadata).toHaveProperty('version', '1.0');
      expect(metadata).toHaveProperty('description', `Demonstrates a simple "hello world" style app`);
      expect(metadata).toHaveProperty('lastCommitSha', 'TBC');
    });
  });

});
