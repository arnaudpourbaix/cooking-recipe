import { authDatabaseMigrations } from '@authentication/nest-auth';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { RecipeCreate1604221469827 } from './migrations/1604221469827-RecipeCreate';
import { IngredientCreate1604221477939 } from './migrations/1604221477939-IngredientCreate';
import { QuantityCreate1616323209116 } from './migrations/1616323209116-QuantityCreate';

export const databaseConnection: SqliteConnectionOptions = {
  type: 'sqlite',
  database: `${process.env.APPDATA}/cooking-recipe.db`,
  logging: false,
  synchronize: true,
  migrationsRun: true,
  migrations: [
    // ...authDatabaseMigrations,
    // RecipeCreate1604221469827,
    // IngredientCreate1604221477939,
    // QuantityCreate1616323209116
  ],
};
