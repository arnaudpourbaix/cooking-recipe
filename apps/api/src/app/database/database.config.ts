import { authDatabaseMigrations } from '@authentication/nest-auth';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { RecipeCreate1604221469827 } from './migrations/1604221469827-RecipeCreate';
import { UnitCreate1616323209116 } from './migrations/1616323209116-UnitCreate';
import { TypeIngredient1617615336758 } from './migrations/1617615336758-TypeIngredient';
import { IngredientCreate1617615489249 } from './migrations/1617615489249-IngredientCreate';
import { RecipeIngredient1617615492791 } from './migrations/1617615492791-RecipeIngredient';
import { UnitInserts1617616596787 } from './migrations/1617616596787-UnitInserts';
import { TypeIngredientInserts1617616609211 } from './migrations/1617616609211-TypeIngredientInserts';
import { IngredientInserts1617616621272 } from './migrations/1617616621272-IngredientInserts';

export const databaseConnection: SqliteConnectionOptions = {
  type: 'sqlite',
  database: `${process.env.APPDATA}/cooking-recipe.db`,
  logging: 'all',
  synchronize: false,
  migrationsRun: true,
  migrations: [
    ...authDatabaseMigrations,
    RecipeCreate1604221469827,
    TypeIngredient1617615336758,
    IngredientCreate1617615489249,
    UnitCreate1616323209116,
    RecipeIngredient1617615492791,
    UnitInserts1617616596787,
    TypeIngredientInserts1617616609211,
    IngredientInserts1617616621272,
  ],
};
