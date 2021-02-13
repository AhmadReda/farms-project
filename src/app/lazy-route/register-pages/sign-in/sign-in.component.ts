import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.signInForm = formBuilder.group({
      fName:['', Validators.required],
      lName:['', Validators.required],
      password:['', Validators.required],
      emailAddress:['',[Validators.required,Validators.email]],
    });
   }

  ngOnInit(): void {
  }


  resetForm(){
    this.signInForm.reset();
  }

}
