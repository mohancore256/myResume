import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Email } from '../email';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal-page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  sendEmailFrom:FormGroup;
  email:Email;
  constructor(private router:Router,private fb: FormBuilder, private http: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
    sessionStorage.setItem("menu","/menu/contact");
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.sendEmailFrom = new FormGroup({
      //from: new FormControl('',Validators.required),
      from: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      to: new FormControl('',Validators.required),
      subject: new FormControl('',Validators.required),
      body: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required)
})

  }

  onSendEmailFrom(){
    this.email = new Email();
    this.email.from = this.sendEmailFrom.get("from").value;
    this.email.to = "kasettymohan456@gmail.com";
    this.email.subject = this.sendEmailFrom.get("subject").value;
    this.email.body=this.sendEmailFrom.get("body").value;
    this.email.phone=this.sendEmailFrom.get("phone").value;
    this.email.text= "Message :"+this.email.body+"\r\n Contact Number :"+this.email.phone
    if(this.email.phone ==null || this.email.phone ==''){
      alert('Please enter some phone number');
      return ;
    }
    if(this.email.body ==null || this.email.body ==''){
      alert('Please enter some text in message');
      return ;
    }
    console.log(this.email);
    this.sendEmail(this.email).subscribe((res) => {
      console.dir('Succesfully sent');
      this.presentModal(true);
    }, (err) => {
      this.presentModal(false);
    });
   
  }
  sendEmail(email: Email): Observable<any> {
    return this.http.post<Email>('/sendMail', email);
  }

  async presentModal(flag: boolean) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'from': this.email.from,
        'phone': this.email.phone
        
      }
    });
    return await modal.present();
  }
 

}
