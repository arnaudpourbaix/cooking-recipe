import { Injectable } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from './user.repository';
import { DATABASE_CONNECTION_NAME } from '../database/database.config';
import { UserProfile } from '@cooking-recipe/api-interfaces';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(profile: UserProfile) {
    // https://github.com/typeorm/typeorm-typedi-extensions
    const userRepository = getCustomRepository(
      UserRepository,
      DATABASE_CONNECTION_NAME
    );
    const entity = userRepository.create({
      id: profile.id,
      displayName: profile.displayName,
      photoUrl: profile.photoUrl,
    });
    return userRepository.save(entity);
  }

  async getUser(id: string) {
    const userRepository = getCustomRepository(
      UserRepository,
      DATABASE_CONNECTION_NAME
    );
    return userRepository.findOne(id);
  }
}
