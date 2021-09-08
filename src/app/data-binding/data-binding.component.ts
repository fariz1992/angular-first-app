import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public user = {
    name: "Fariz",
    surname: "Huseynov",
    age: 29,
    title: "Software Developer",
    email: "fariz.huseynov.ext@ericsson.com",
    isEditable: true
  };
  constructor() { }

  ngOnInit(): void {
  }

  clicked = (event: any) => {
    console.log('clicked');
  };

  
  keyupEnter(keyboardEvent:Event): void {
    console.log((keyboardEvent.target as HTMLInputElement).value);
  }


}
