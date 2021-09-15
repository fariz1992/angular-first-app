import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  fullName: string = "Senan Hesenov";
  state: string = "naxçıvan muxtar respublikası";
  balance: number = 20000.51234;
  faizDeyeri: number = 0.95;

  tarix: Date = new Date();

  data: Object = {
    name: 'Iphone',
    model: 'XS MAX',
    color: ['white', 'black', 'silver'],
    amount: 10000,
    IsAvailableInInventory: true,
    Count: 10
  };

  rayonlar: string[] = [
    'Baki',
    'Naxcivan',
    'Quba',
    'Qusar',
    'Zengilan',
    'Goycay'
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
