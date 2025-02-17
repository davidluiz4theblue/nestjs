import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SharedModule } from 'src/shared/shared.module';
import { PostsModule } from 'src/routes/posts/posts.module'

@Module({
  imports: [SharedModule,PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
