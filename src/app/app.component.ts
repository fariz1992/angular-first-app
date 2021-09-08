import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Senan';
  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   document.addEventListener('click',function(event){
    console.log(event);
   });
  }

  ngOnDestroy(): void {
    console.log("Sehife baglananda cagirilacaq funksiya.")
  }

  showSuccess = () => {
    const myConfig = {
      closeButton: true,
      progressBar: true,
      timeOut: 500
    };
    this.toastr.success('Satış başarıyla tamamlandı.', 'Tebrikler'/*, myConfig*/);

  }


  showSpinner = () => { 
    this.spinner.show();

    setTimeout(() => { 
      this.spinner.hide();
    }, 500);

  };

}
