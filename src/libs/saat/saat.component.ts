import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-saat',
  templateUrl: './saat.component.html',
  styleUrls: ['./saat.component.scss']
})
export class SaatComponent implements OnInit {
  @Input()
  value: number = 0;

  @Output()
  onSaatClick: EventEmitter<any> = new EventEmitter();

  model = {
    firstName: "",
    lastName: ""
  };

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.value++;
    }, 1000)
  }


  onButtonClick = () => {
    this.onSaatClick.emit(this.model);
  }

}
