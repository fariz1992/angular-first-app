import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void { 
    this.router.params.subscribe(params=>{
      alert(params['id']);
    });
  }
 

}
