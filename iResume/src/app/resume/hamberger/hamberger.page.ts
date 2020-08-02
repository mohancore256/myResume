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
      title:'Personal Information',
      url:'/menu/myProfile',
      icon:'person-outline'
    },
    {
      id:'2',
      title:'Technologies',
      url:'/menu/technologies',
      icon:'ribbon-outline'
    },
    {
      id:'3',
      title:'Experience',
      url:'/menu/workExperience',
      icon:'newspaper-outline'
    },
    {
      id:'4',
      title:'Client',
      url:'/menu/myClient',
      icon:'trophy-outline'
    },
    {
      id:'5',
      title:'Contact Me',
      url:'/menu/contact',
      icon:'mail-outline'
    },
    {
      id:'6',
      title:'About App',
      url:'/menu/aboutApp',
      icon:'help-circle-outline'
    },
    // {
    //   id:'7',
    //   title:'Workspace',
    //   url:'/menu/workspace',
    //   icon:'help-circle-outline'
    // },
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
