import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit {

  constructor() { }
  screenHeight: number;

  ngOnInit() {
    this.screenHeight = screen.availHeight - 56;
  }
}
