import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipe/recipe.module').then((m) => m.RecipeModule),
  },
  {
    path: 'ingredient',
    loadChildren: () =>
      import('./ingredient/ingredient.module').then((m) => m.IngredientModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
