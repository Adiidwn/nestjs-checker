import { Module } from '@nestjs/common';
import { ServiceModule } from './modules/service.modules';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ServiceModule],
  providers: [],
})
export class AppModule {}
