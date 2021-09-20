import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlacklistValidator, WhiteSpaceValidator } from 'src/libs';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit {

  model = {
    fullName: "",
    email: ""
  };

  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl(this.model.fullName ? this.model.fullName : "",
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          WhiteSpaceValidator
        ],
        updateOn: "blur"
      }),
    email: new FormControl(this.model.email ? this.model.email : "", {
      validators: [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        BlacklistValidator("a")
      ],
      updateOn: "blur"
    })
  });

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit = () => {

    //oxumaq
    this.model = this.registerForm.value;
    localStorage.setItem("data", JSON.stringify(this.model));
    console.log(this.registerForm);

    // this.registerForm.setValue({
    //     fullName: "Senan",
    //     email: "senan@gmail.com"
    //   });
    // deyer vermek
    // this.registerForm.patchValue({
    //   fullName: "Senan",
    //   email: "senan@gmail.com"
    // });
  };




}
