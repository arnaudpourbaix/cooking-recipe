import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { RecipeCreate1604221469827 } from './migrations/1604221469827-RecipeCreate';
import { IngredientCreate1604221477939 } from './migrations/1604221477939-IngredientCreate';

export const DATABASE_CONNECTION_NAME = 'youtubeConnection';

export const databaseConnection: SqliteConnectionOptions = {
  name: DATABASE_CONNECTION_NAME,
  type: 'sqlite',
  database: `${process.env.APPDATA}/cooking-recipe.db`,
  synchronize: false,
  migrationsRun: true,
  migrations: [RecipeCreate1604221469827, IngredientCreate1604221477939],
};
