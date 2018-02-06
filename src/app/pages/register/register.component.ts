import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // publi

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
