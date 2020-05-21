import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import fs = require('fs');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('hello-world-app is operating as expected');
  });

  // Note expected data has escaped backslash (\\) to match returned data which has single backslash (\)
  it('/metadata (GET)', () => {
    const hash = fs.readFileSync('hash', 'utf8');
    return request(app.getHttpServer())
      .get('/metadata')
      .expect(200)
      .expect(`{"appName":"hello-world-app","version":"1.0","description":"Demonstrates a simple \\"hello world\\" style app","lastCommitSha":"${hash}"}`);
  });
});
