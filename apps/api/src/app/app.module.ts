import { NestAuthModule, VALIDATION_SCHEMA } from '@authentication/nest-auth';
import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import authConfig from './config/auth.config';
import { IngredientController } from './controllers/ingredient.controller';
import { RecipeController } from './controllers/recipe.controller';
import { UnitController } from './controllers/unit.controller';
import { databaseConnection } from './database/database.config';
import { Ingredient } from './database/entities/ingredient.entity';
import { RecipeIngredient } from './database/entities/recipe-ingredient.entity';
import { Recipe } from './database/entities/recipe.entity';
import { TypeIngredient } from './database/entities/type-ingredient.entity';
import { Unit } from './database/entities/unit.entity';
import { IngredientService } from './services/ingredient.service';
import { RecipeService } from './services/recipe.service';
import { UnitService } from './services/unit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Ingredient,
      Recipe,
      RecipeIngredient,
      TypeIngredient,
      Unit,
    ]),
    HttpModule,
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
  //   controllers: [RecipeController, IngredientController, UnitController],
  //   providers: [RecipeService, IngredientService, UnitService],
})
export class AppModule {}
