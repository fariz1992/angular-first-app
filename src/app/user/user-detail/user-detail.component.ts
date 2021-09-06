import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private userId: string;
  constructor(private router: ActivatedRoute,private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.userId = params['id'].toString();
      this.toastr.success(this.userId);
    });
  }

}
