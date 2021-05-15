import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { IngredientDetailsComponent } from './details/ingredient-details.component';
import { IngredientListComponent } from './list/ingredient-list.component';
import { IngredientState } from './state/ingredient.state';
import { IngredientUpdateComponent } from './update/ingredient-update.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BindQueryParamModule } from '@cooking-recipe/ng-common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SeasonPipe } from './list/season.pipe';

const uiModules = [
  BindQueryParamModule,
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    IngredientListComponent,
    IngredientDetailsComponent,
    IngredientUpdateComponent,
    SeasonPipe,
  ],
  imports: [
    ...uiModules,
    NgxsModule.forFeature([IngredientState]),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IngredientListComponent },
      { path: 'details/:id', component: IngredientDetailsComponent },
      { path: 'create', component: IngredientUpdateComponent },
    ]),
  ],
})
export class IngredientModule {}
