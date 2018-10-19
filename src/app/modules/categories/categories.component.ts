import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../model/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = Category.getAll();

  constructor() { }

  ngOnInit() {
  }

}
