import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMail(): Promise<void> {
    const user: User = {
      email: 'felipe@maisquestoes.com.br',
      name: 'Felipe',
    };
    return this.appService.signUp(user);
  }
}
