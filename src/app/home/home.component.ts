import { Component, OnInit, ViewChild } from '@angular/core';
import { SaatComponent } from 'src/libs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model!: any;
  constructor() { }

  @ViewChild(SaatComponent)
  saatComponent!: SaatComponent;

  ngOnInit(): void {

  }


  display = (model: any) => {
    this.model = model;
  };


  goster = () => alert(this.saatComponent.model.firstName);

}
