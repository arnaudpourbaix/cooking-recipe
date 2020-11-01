import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtData, UserProfile } from '@cooking-recipe/api-interfaces';
import { sign } from 'jsonwebtoken';
import { AppConfig } from '../config/config.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService<AppConfig>,
    private readonly userService: UserService
  ) {}

  async validateOAuthLogin(
    jwtData: JwtData,
    userProfile: UserProfile
  ): Promise<string> {
    try {
      await this.userService.createUser(userProfile);
      const jwt: string = sign(
        jwtData,
        this.configService.get<string>('jwtSecretKey') as string,
        { expiresIn: 3600 }
      );
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
