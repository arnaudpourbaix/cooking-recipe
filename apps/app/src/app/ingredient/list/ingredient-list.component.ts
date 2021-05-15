import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  IngredientDto,
  SeasonDto,
  TypeIngredientDto,
} from '@cooking-recipe/api-interfaces';
import {
  BindQueryParamOptions,
  FormGroupTyped,
  LoggerLevelEnum,
} from '@cooking-recipe/ng-common';
import { Select, Store } from '@ngxs/store';
import { merge, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { IngredientActions } from '../state/ingredient.action';
import { IngredientState } from '../state/ingredient.state';
import { IngredientListForm } from './ingredient-list.model';

@Component({
  selector: 'cooking-recipe-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent
  implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<void>();

  @Select(IngredientState.types)
  types$: Observable<TypeIngredientDto[]> | undefined;

  @Select(IngredientState.seasons)
  seasons$: Observable<SeasonDto[]> | undefined;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<IngredientDto>;
  dataSource$: Observable<MatTableDataSource<IngredientDto>> | undefined;

  displayedColumns: string[] = ['label', 'type', 'season', 'action'];

  form = this.fb.group({
    searchText: [''],
    seasonId: [null],
    typeId: [null],
  }) as FormGroupTyped<IngredientListForm>;

  bindOptions: Partial<BindQueryParamOptions<any>> = {
    formToQuery: true,
    debounceTime: 200,
    formMapper: (params: Params) => {
      return {
        searchText: params.searchText,
        seasonId: params.seasonId,
        typeId: params.typeId ? +params.typeId : null,
      };
    },
    queryParamsMapper: (form) => ({
      searchText: form.searchText,
      seasonId: form.seasonId,
      typeId: form.typeId,
    }),
    logger: { level: LoggerLevelEnum.verbose },
  };

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initTable();
    this.store.dispatch(new IngredientActions.Init());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reset() {}

  openDetails(ingredient: IngredientDto) {
    this.router.navigate(['details', ingredient.id], {
      relativeTo: this.route,
      queryParams: this.form.value,
    });
  }

  clearSearchText() {
    this.form.controls.searchText.setValue('');
  }

  private initTable() {
    this.dataSource = new MatTableDataSource([] as IngredientDto[]);
    this.dataSource.sortingDataAccessor = (ingredient, sortHeaderId) => {
      let value: any;
      switch (sortHeaderId) {
        case 'label':
          value = ingredient.label.toLocaleLowerCase();
          break;
        case 'type':
          value = ingredient.type.label.toLocaleLowerCase();
          break;
        case 'season':
          value = ingredient.seasons;
          break;
      }
      return value;
    };
    this.dataSource$ = this.getFormChanges().pipe(
      takeUntil(this.destroy$),
      startWith([]),
      delay(0),
      switchMap(() =>
        this.store.dispatch(new IngredientActions.Search(this.form.value))
      ),
      map(() => {
        this.dataSource.data = this.store.selectSnapshot(
          IngredientState.ingredients
        );
        return this.dataSource;
      })
    );
  }

  private getFormChanges() {
    const searchTextChange$ = this.form.controls.searchText.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
    );
    return merge(
      searchTextChange$,
      this.form.controls.typeId.valueChanges,
      this.form.controls.seasonId.valueChanges
    );
  }
}
