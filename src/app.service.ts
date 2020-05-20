import { Injectable } from '@nestjs/common';

export interface IMetadataResponse {
  appName: string;
  version: string;
  description: string;
  lastCommitSha: string;
}

@Injectable()
export class AppService {

  private readonly APP_NAME = 'hello-world-app';
  private readonly APP_VERSION = '1.0';
  private readonly APP_DESCRIPTION = `Demonstrates a simple "hello world" style app`;

  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): string {
    return `${this.APP_NAME} is operating as expected`;
  }

  getMetadata(): IMetadataResponse {
    return {
      appName: this.APP_NAME,
      version: this.APP_VERSION,
      description: this.APP_DESCRIPTION,
      lastCommitSha: 'TBC',
    };
  }
}
