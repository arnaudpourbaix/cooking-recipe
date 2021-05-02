import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IngredientDetailsComponent } from './details/ingredient-details.component';
import { IngredientListComponent } from './list/ingredient-list.component';
import { IngredientUpdateComponent } from './update/ingredient-update.component';

@NgModule({
  declarations: [
    IngredientListComponent,
    IngredientDetailsComponent,
    IngredientUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IngredientListComponent },
      { path: 'create', component: IngredientUpdateComponent },
    ]),
  ],
})
export class IngredientModule {}
