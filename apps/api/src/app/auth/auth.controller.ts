import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { JwtData } from '@cooking-recipe/api-interfaces';
import { Response } from 'express';
import { AppConfig } from '../config/config.model';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly configService: ConfigService<AppConfig>,
    private readonly userService: UserService
  ) {}

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async userProfile(@Req() req: any) {
    const jwtData = req.user as JwtData;
    const profile = this.userService.getUser(jwtData.thirdPartyId);
    return profile;
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req: any, @Res() res: Response) {
    const loginSuccessUrl = this.configService.get<string>('loginSuccessUrl');
    res.redirect(`${loginSuccessUrl}/#/?jwt=${req.user.jwt}`);
  }
}
