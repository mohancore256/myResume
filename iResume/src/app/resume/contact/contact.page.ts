import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Email } from '../email';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  sendEmailFrom:FormGroup;
  email:Email;
  constructor(private router:Router,private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.sendEmailFrom = new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
      subject: new FormControl(),
      body: new FormControl()
})

  }

  onSendEmailFrom(){
    this.email = new Email();
    this.email.from = this.sendEmailFrom.get("from").value;
    this.email.to = "kasettymohan456@gmail.com";
    this.email.subject = this.sendEmailFrom.get("subject").value;
    this.email.text=this.sendEmailFrom.get("body").value;
    console.log(this.email);
    this.sendEmail(this.email).subscribe(res => {
      console.dir('Succesfully sent');
    });
   
  }
  sendEmail(email: Email): Observable<any> {
    return this.http.post<Email>('http://localhost:3000/sendMail', email);
  }


 

}
