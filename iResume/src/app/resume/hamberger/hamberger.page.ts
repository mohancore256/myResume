import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hamberger',
  templateUrl: './hamberger.page.html',
  styleUrls: ['./hamberger.page.scss'],
})
export class HambergerPage implements OnInit {
  sessionValue : string="";

  pages=[
    {
      id:'1',
      title:'Home',
      url:'/menu/landingPage',
      icon:'home-outline',
      iconActive:'home-sharp',
    },
    {
      id:'2',
      title:'Personal Information',
      url:'/menu/myProfile',
      icon:'person-outline',
      iconActive:'person-sharp',
    },
    {
      id:'3',
      title:'Technologies',
      url:'/menu/technologies',
      icon:'ribbon-outline',
      iconActive:'ribbon-sharp',
    },
    {
      id:'4',
      title:'Experience',
      url:'/menu/workExperience',
      icon:'newspaper-outline',
      iconActive:'newspaper-sharp',
    },
    {
      id:'5',
      title:'Client',
      url:'/menu/myClient',
      icon:'trophy-outline',
      iconActive:'trophy-sharp',
    },
    {
      id:'6',
      title:'Contact Me',
      url:'/menu/contact',
      icon:'mail-outline',
      iconActive:'mail-sharp',
    },
    {
      id:'7',
      title:'About App',
      url:'/menu/aboutApp',
      icon:'help-circle-outline',
      iconActive:'help-circle-sharp',
    },
    // {
    //   id:'8',
    //   title:'Workspace',
    //   url:'/menu/workspace',
    //   icon:'help-circle-outline',
    //    iconActive:'home-sharp',
    // },
  ]

  selectedPath='';

  constructor(private menu: MenuController,private router :Router,) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath=event.url;
      this.sessionValue=sessionStorage.getItem("menu");
      console.log(this.sessionValue);
    })
  }

  ngOnInit() {
  }

 openCustom() {
    this.menu.enable(true, 'hamburger');
    this.menu.open('hamburger');
  }
}
