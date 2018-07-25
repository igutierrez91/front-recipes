import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../../providers/recipe.service";
import { Recipe } from "../../entities/recipe";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipeToSearch;
  recipes: Recipe[];
  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {}

  onChange($event) {
    if (this.recipeToSearch.length > 0) {
      this._recipeService
        .getRecipeByTerm(this.recipeToSearch)
        .subscribe(recipes => {
          this.recipes = recipes;
        });
    } else {
      this.recipes = [];
    }
  }
}
