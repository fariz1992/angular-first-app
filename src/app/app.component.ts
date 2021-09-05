import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy { 
  ngOnInit(): void {
    console.log("Sehife ilk acilanda cagirilacaq funksiya.")
  }

  ngOnDestroy(): void {
    console.log("Sehife baglananda cagirilacaq funksiya.")
  }
  title = 'Senan';
  
}
