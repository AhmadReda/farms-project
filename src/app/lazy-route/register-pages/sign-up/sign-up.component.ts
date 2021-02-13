import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  checkOutForm!: FormGroup;
  // formAlta: any;
  constructor(private formBuilder:FormBuilder) {

    this.checkOutForm = formBuilder.group({
      fName:['', Validators.required],
      lName:['', Validators.required],
      password:['', Validators.required],
      emailAddress:['',[Validators.required,Validators.email]],
    });



   }

  ngOnInit(): void {
  }

//   get formAltaControls(): any {
//     return this.formAlta['controls'];
//  }
 resetForm(){
   this.checkOutForm.reset();
 }
  postData(){
    console.log(this.checkOutForm);
    
  }
}
