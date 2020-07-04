import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.page.html',
  styleUrls: ['./hamburger.page.scss'],
})
export class HamburgerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages =[
    {
      id:'1',
      title:'Contact Me',
      url:'/resume/contact'
    },
    {
      id:'2',
      title:'Work Experience',
      url:'/resume/experience'
    }
  ]

}
