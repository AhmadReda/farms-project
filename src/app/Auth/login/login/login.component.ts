import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
