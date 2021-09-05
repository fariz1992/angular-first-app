import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Senan';
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("Sehife ilk acilanda cagirilacaq funksiya.")
    this.showSuccess();
  }

  ngOnDestroy(): void {
    console.log("Sehife baglananda cagirilacaq funksiya.")
  }

  showSuccess = () => {
    const myConfig = {
      closeButton: true,
      progressBar: true,
      timeOut:10000
    };
    this.toastr.success('Satış başarıyla tamamlandı.', 'Tebrikler'/*, myConfig*/);

  }

}
