import { Controller, Post, Body } from '@nestjs/common';
import { WebhookHandlerService } from './webhook-handler.service';

@Controller('webhook-handler')
export class WebhookHandlerController {
  constructor(private readonly webhookHandlerService: WebhookHandlerService) {}

  @Post()
  async handleWebhook(@Body() payload: any) {
    return this.webhookHandlerService.handleWebhook(payload, 'token');
  }
}
