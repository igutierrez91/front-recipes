import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';

const secondaryRoutes: Routes = [
  { path: 'recipes',  component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(secondaryRoutes)],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
