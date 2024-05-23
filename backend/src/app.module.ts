import { Module } from '@nestjs/common';
import { ServiceModule } from './modules/service.modules';

@Module({
  imports: [ServiceModule],
  providers: [],
})
export class AppModule {}
