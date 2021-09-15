import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/model/MenuItemModel';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  display: boolean = true;
  name: string = ""; 
  styleValue = {
    'font-style': 'italic',
    'font-weight': 'bold',
    'font-size': '24px'
  };
  color="blue";

  list: MenuItemModel[] = [
    {
      name: 'Home',
      url: 'home',
      iconName: 'list',
      isActive: false
    },
    {
      name: 'Directive',
      url: 'directive',
      iconName: 'list',
      isActive: false
    }
    ,
    {
      name: 'Data binding',
      url: 'binding',
      iconName: 'list',
      isActive: false
    }
    ,
    {
      name: 'Routing',
      url: 'routing',
      iconName: 'list',
      isActive: false
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
