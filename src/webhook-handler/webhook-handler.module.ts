import { Module } from '@nestjs/common';
import { WebhookHandlerController } from './webhook-handler.controller';
import { WebhookHandlerService } from './webhook-handler.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [WebhookHandlerController],
  providers: [WebhookHandlerService],
  imports: [UserModule],
})
export class WebhookHandlerModule {}
