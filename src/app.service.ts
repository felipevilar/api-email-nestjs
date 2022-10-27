import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { UserDto } from './user/user.dto';
@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}

  async signUp(user: UserDto) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    // create user in db
    // ...
    // send confirmation mail
    await this.mailService.sendUserConfirmation(user, token);
  }
  async sendExternal(user: UserDto) {
    await this.mailService.sendWelcomeExternal(user);
  }
}
