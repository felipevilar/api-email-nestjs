import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './user/user.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMail(@Body() user: UserDto): Promise<void> {
    return this.appService.signUp(user);
  }
}
