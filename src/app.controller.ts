import { Controller, Get } from '@nestjs/common';
import { AppService, IMetadataResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('/metadata')
  getMetadata(): IMetadataResponse {
    return this.appService.getMetadata();
  }
}
