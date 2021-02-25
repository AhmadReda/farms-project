import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  checkOutForm!: FormGroup;
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

  resetForm(){
    this.checkOutForm.reset();
  }
   postData(){
     console.log(this.checkOutForm);
     
   }
}
