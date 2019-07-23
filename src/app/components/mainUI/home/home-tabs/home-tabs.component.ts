import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.component.html',
  styleUrls: ['./home-tabs.component.less']
})
export class HomeTabsComponent implements OnInit {

  links = [{ name: 'Chat', path: '/home/chat' }, { name: 'Explore', path: '/home/explore' }];
  activeLink = this.links[0].name;
  background = '';
  screenHeight;

  constructor() { }

  ngOnInit() {
    this.screenHeight = screen.availHeight - 112;
  }

}
