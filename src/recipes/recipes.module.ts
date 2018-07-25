import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';

import { FormsModule } from '@angular/forms';
import { RecipeService } from './providers/recipe.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [RecipeListComponent, RecipeCardComponent],
  providers: [RecipeService]
})
export class RecipesModule { }
