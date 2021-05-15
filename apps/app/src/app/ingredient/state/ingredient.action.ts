import { IngredientListForm } from '../list/ingredient-list.model';

export namespace IngredientActions {
  export class Init {
    constructor() {}
    static readonly type = '[Ingredient] Init';
  }
  export class InitTypes {
    constructor() {}
    static readonly type = '[Ingredient] InitTypes';
  }
  export class InitSeasons {
    constructor() {}
    static readonly type = '[Ingredient] InitSeasons';
  }
  export class Search {
    constructor(public payload: IngredientListForm) {}
    static readonly type = '[Ingredient] Search';
  }
}
