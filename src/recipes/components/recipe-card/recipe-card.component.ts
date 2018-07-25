import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe;
  imgError = 'http://www.getoutma.org/upload/2017/11/17/22-diy-concrete-projects-and-creative-ideas-for-your-garden-diy-unique-outdoor-decor-ideas-l-837d3038bf167645.jpg';

  constructor() { }

  ngOnInit() {
    console.log(this.recipe);
  }

}
