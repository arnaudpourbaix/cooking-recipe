import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { databaseConnection } from './database/database.config';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    RecipeModule,
    UserModule,
    IngredientModule,
    ConfigModule.forRoot({
      envFilePath: 'config.env',
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...databaseConnection,
    }),
  ],
})
export class AppModule {}
