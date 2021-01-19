import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.page.html',
  styleUrls: ['./workspace.page.scss'],
})
export class WorkspacePage implements OnInit {
  signupform: FormGroup;
  userData = { "username": "", "password": "", "email": "", "name": "" };
  
  validation_messages = {
    'myField': [
    { type: 'pattern', message: 'Please enter a number like 12345678/00.' }
  ]
}
  constructor() {}

   ngOnInit() {    
    sessionStorage.setItem("menu","/menu/myClient");
  }

}
