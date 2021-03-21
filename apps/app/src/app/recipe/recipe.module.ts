import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './list/recipe-list.component';
import { RecipeDetailsComponent } from './details/recipe-details.component';
import { RecipeUpdateComponent } from './update/recipe-update.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RecipeListComponent },
      { path: 'create', component: RecipeUpdateComponent },
    ]),
  ],
})
export class RecipeModule {}
