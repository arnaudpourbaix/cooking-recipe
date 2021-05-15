import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IngredientActions } from './ingredient.action';
import {
  IngredientDto,
  SeasonDto,
  TypeIngredientDto,
} from '@cooking-recipe/api-interfaces';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Logger, LoggerLevelEnum } from '@cooking-recipe/ng-common';
import { ObjectUtils } from '@cooking-recipe/utils';

interface StateModel {
  ingredients: IngredientDto[];
  types: TypeIngredientDto[];
  seasons: SeasonDto[];
}

@State<StateModel>({
  name: 'ingredient',
  defaults: {
    types: [],
    seasons: [],
    ingredients: [],
  },
})
@Injectable()
export class IngredientState {
  private readonly logger = new Logger('IngredientState', {
    level: LoggerLevelEnum.verbose,
  });

  constructor(
    private readonly http: HttpClient,
    private readonly snackBar: MatSnackBar
  ) {}

  @Selector()
  static ingredients(state: StateModel): IngredientDto[] {
    return state.ingredients;
  }

  @Selector()
  static types(state: StateModel): TypeIngredientDto[] {
    return state.types;
  }

  @Selector()
  static seasons(state: StateModel): SeasonDto[] {
    return state.seasons;
  }

  @Action(IngredientActions.Init)
  init(ctx: StateContext<StateModel>) {
    return ctx.dispatch([
      new IngredientActions.InitTypes(),
      new IngredientActions.InitSeasons(),
    ]);
  }

  @Action(IngredientActions.InitTypes)
  initTypes(ctx: StateContext<StateModel>) {
    return this.http.get<TypeIngredientDto[]>(`v1/typesIngredients`).pipe(
      map((types) => {
        ctx.patchState({
          types,
        });
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  @Action(IngredientActions.InitSeasons)
  initSeasons(ctx: StateContext<StateModel>) {
    return this.http.get<SeasonDto[]>(`v1/seasons`).pipe(
      map((seasons) => {
        ctx.patchState({
          seasons,
        });
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  @Action(IngredientActions.Search)
  search(ctx: StateContext<StateModel>, action: IngredientActions.Search) {
    this.logger.info({ action: 'search', object: action.payload });
    return this.http
      .get<IngredientDto[]>(`v1/ingredients`, {
        params: ObjectUtils.stripBlankProperties(action.payload),
      })
      .pipe(
        map((ingredients) => {
          ctx.patchState({
            ingredients,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}
