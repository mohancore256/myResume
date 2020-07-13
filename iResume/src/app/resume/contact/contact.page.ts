import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  sendEmailFrom:FormGroup;
  email:Email;
  constructor(private router:Router,private fb: FormBuilder) { }

  ngOnInit() {
    // this.sendEmailFrom = this.fb.group({
    //    from: ["", Validators.required],
    //   // to: ["", Validators.required],
    //   // subject: ["", Validators.required],
    //   // body: ["", Validators.required]  
    // });
  //}); 
this.sendEmailFrom = new FormGroup({
  from: new FormControl(),
})

  }

  onSendEmailFrom(){
    this.email = new Email();
    this.email.from = this.sendEmailFrom.get("from").value;
    this.email.to = this.sendEmailFrom.get("to").value;
    this.email.subject = this.sendEmailFrom.get("subject").value;
    
  }

 

}
