import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  user = {
    firstName: "Senan",
    lastName: "Hasanov",
    birthdate: '1996-10-29',
    email: 'senan@gmail.com',
    title: 'Front End Developer',
    isEditable: true,
    fontWeight: 'bold'
  };

  cookieValue!: string;


  constructor(private cookieService: CookieService) { }

  goster() {

  }

  ngOnInit(): void {
  }


  showMessage(event: Event) {
    var myInput = (event.target as HTMLInputElement);
    myInput.placeholder = "Bu alani doldurmak zorunludur.";
    console.log("clicked", myInput?.value);
  }

  AddOrUpdate = (value: string): void => {
    let expiredate: Date = new Date();
    expiredate.setDate(expiredate.getDate() + 5);
    this.cookieService.set('username', value, expiredate);
  }

  Get = () => this.cookieValue = this.cookieService.get('username');

}
