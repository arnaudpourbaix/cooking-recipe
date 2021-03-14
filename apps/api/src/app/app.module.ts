import { NestAuthModule, VALIDATION_SCHEMA } from '@authentication/nest-auth';
import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import authConfig from './config/auth.config';
import { databaseConnection } from './database/database.config';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    HttpModule,
    RecipeModule,
    IngredientModule,
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      ...databaseConnection,
    }),
    ConfigModule.forRoot({
      validationSchema: VALIDATION_SCHEMA,
      envFilePath: 'config-auth.env',
      load: [authConfig],
      isGlobal: true,
    }),
    NestAuthModule.registerAsync({
      inject: [authConfig.KEY],
      useFactory: async (config: ConfigType<typeof authConfig>) => ({
        google: config.google,
        jwt: config.jwt,
      }),
    }),
  ],
})
export class AppModule {}
