import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { JwtData, UserProfile } from '@cooking-recipe/api-interfaces';
import { Strategy } from 'passport-google-oauth20';
import { AppConfig, GoogleConfig } from '../config/config.model';
import { AuthProvider } from './auth-provider.enum';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService<AppConfig>,
    private readonly authService: AuthService
  ) {
    super({
      clientID: (configService.get<GoogleConfig>('google') as GoogleConfig)
        .clientId,
      clientSecret: (configService.get<GoogleConfig>('google') as GoogleConfig)
        .clientSecret,
      callbackURL: (configService.get<GoogleConfig>('google') as GoogleConfig)
        .redirectUrl,
      passReqToCallback: false,
      scope: [
        'profile',
        'https://www.googleapis.com/auth/youtube', // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube.force-ssl', // See, edit, and permanently delete your YouTube videos, ratings, comments and captions
      ],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: {
      id: string;
      displayName: string;
      name?: { familyName: string; givenName: string };
      photos?: { value: string }[];
    },
    done: Function
  ) {
    try {
      const jwtData: JwtData = {
        thirdPartyId: profile.id,
        accessToken,
        refreshToken,
        provider: AuthProvider.GOOGLE,
      };
      const userProfile: UserProfile = {
        id: profile.id,
        displayName: profile.displayName,
        photoUrl: profile.photos?.[0]?.value,
      };
      const jwt = await this.authService.validateOAuthLogin(
        jwtData,
        userProfile
      );
      done(null, { jwt });
    } catch (err) {
      console.log(err);
      done(err, false);
    }
  }
}
