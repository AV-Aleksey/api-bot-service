import { Injectable } from '@nestjs/common';
import { WebhookHandler } from './webhook-handler.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class WebhookHandlerService implements WebhookHandler {
  constructor(private readonly userService: UserService) {}

  async handleWebhook(payload: any, signature: string): Promise<any> {
    if (!this.validatePayload(payload, signature)) {
      throw new Error('Webhook payload validation failed');
    }

    const data = await this.userService.findOne(1);

    return {
      status: 'ok',
      data,
    };
  }

  private validatePayload(payload: any, signature: string): boolean {
    return true;
  }
}
