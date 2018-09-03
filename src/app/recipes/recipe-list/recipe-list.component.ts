import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://www.maxpixel.net/images/apple-touch-icon-57x57.png'),
    new Recipe('A Test Recipe','This is simply a test','https://www.maxpixel.net/images/apple-touch-icon-57x57.png')
];
  constructor() { }

  ngOnInit() {
  }

}
