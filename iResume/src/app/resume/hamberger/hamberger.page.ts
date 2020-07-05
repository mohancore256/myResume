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
      url:'/menu/landingPage',
      icon:'home-outline'
    },
    {
      id:'2',
      title:'Technologies',
      url:'/menu/contact',
      icon:'ribbon-outline'
    },
    {
      id:'3',
      title:'Experience',
      url:'/menu/landingPage',
      icon:'newspaper-outline'
    },
    {
      id:'4',
      title:'Client',
      url:'/menu/contact',
      icon:'trophy-outline'
    },
    {
      id:'5',
      title:'Contact Me',
      url:'/menu/landingPage',
      icon:'mail'
    },
    {
      id:'6',
      title:'About App',
      url:'/menu/contact',
      icon:'desktop-outline'
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

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  openCustom() {
    this.menu.enable(true, 'hamburger');
    this.menu.open('hamburger');
  }
}
