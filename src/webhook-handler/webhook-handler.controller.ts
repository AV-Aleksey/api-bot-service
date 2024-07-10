import { Controller, Post, Body } from '@nestjs/common';
import { WebhookHandlerService } from './webhook-handler.service';
import { UserService } from '../user/user.service';

@Controller('webhook-handler')
export class WebhookHandlerController {
  constructor(
    private readonly webhookHandlerService: WebhookHandlerService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async handleWebhook(@Body() payload: any): Promise<string> {
    try {
      const data = await this.webhookHandlerService.handleWebhook(
        payload,
        'dsadsa',
      );

      const user = await this.userService.findOne(1);

      console.log(user);
    } catch (err) {
      console.error('Webhook handler error:', err.message);
      return 'Webhook Handler Error';
    }

    return 'Webhook received successfully';
  }
}
