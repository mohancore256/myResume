import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-hamberger',
  templateUrl: './hamberger.page.html',
  styleUrls: ['./hamberger.page.scss'],
})
export class HambergerPage implements OnInit {

  pages=[
    {
      id:'1',
      title:'contact',
      url:'/menu/contact'
    },
    {
      id:'2',
      title:'landingPage',
      url:'/menu/landingPage'
    }
  ]

  selectedPath='';

  constructor(private router :Router) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath=event.url;
    })
  }

  ngOnInit() {
  }

}
