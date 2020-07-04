import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hamberger',
  templateUrl: './hamberger.page.html',
  styleUrls: ['./hamberger.page.scss'],
})
export class HambergerPage implements OnInit {

  pages=[
    {
      id:'1',
      title:'Home',
      url:'/menu/landingPage'
    },
    {
      id:'2',
      title:'Technologies',
      url:'/menu/contact'
    },
    {
      id:'3',
      title:'Experience',
      url:'/menu/landingPage'
    },
    {
      id:'4',
      title:'Client',
      url:'/menu/contact'
    },
    {
      id:'5',
      title:'Contact',
      url:'/menu/landingPage'
    },
    {
      id:'6',
      title:'About App',
      url:'/menu/contact'
    },
    
  ]

  selectedPath='';

  constructor(private menu: MenuController,private router :Router,) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath=event.url;
    })
  }

  ngOnInit() {
  }
}
