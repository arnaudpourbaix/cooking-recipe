import { RecipeCreate1604221469827 } from './1604221469827-RecipeCreate';
import { UnitCreate1616323209116 } from './1616323209116-UnitCreate';
import { TypeIngredientCreate1617615336758 } from './1617615336758-TypeIngredientCreate';
import { IngredientCreate1617615489249 } from './1617615489249-IngredientCreate';
import { RecipeIngredient1617615492791 } from './1617615492791-RecipeIngredient';
import { UnitInserts1617616596787 } from './1617616596787-UnitInserts';
import { TypeIngredientInserts1617616609211 } from './1617616609211-TypeIngredientInserts';
import { IngredientInserts1617616621272 } from './1617616621272-IngredientInserts';
import { SeasonCreate1619938222520 } from './1619938222520-SeasonCreate';
import { SeasonIngredientCreate1619938240065 } from './1619938240065-SeasonIngredientCreate';
import { SeasonInserts1619938253979 } from './1619938253979-SeasonInserts';
import { SeasonIngredientInserts1619938269625 } from './1619938269625-SeasonIngredientInserts';

export const migrations = [
  SeasonCreate1619938222520,
  UnitCreate1616323209116,
  TypeIngredientCreate1617615336758,
  IngredientCreate1617615489249,
  SeasonIngredientCreate1619938240065,
  RecipeCreate1604221469827,
  RecipeIngredient1617615492791,
  UnitInserts1617616596787,
  SeasonInserts1619938253979,
  TypeIngredientInserts1617616609211,
  IngredientInserts1617616621272,
  SeasonIngredientInserts1619938269625,
];
