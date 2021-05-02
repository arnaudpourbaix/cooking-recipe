import { authDatabaseMigrations } from '@authentication/nest-auth';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { migrations } from './migrations/migrations';

export const databaseConnection: SqliteConnectionOptions = {
  type: 'sqlite',
  database: `${process.env.APPDATA}/cooking-recipe.db`,
  logging: 'all',
  synchronize: false,
  migrationsRun: true,
  migrations: [...authDatabaseMigrations, ...migrations],
};
