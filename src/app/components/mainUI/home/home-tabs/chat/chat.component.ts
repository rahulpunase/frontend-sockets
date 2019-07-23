import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  chatters = [];
  constructor(
    private router: Router,
    private acRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acRoute.data.forEach(routeData => {
      this.chatters = routeData["users"];
    });
  }

  navigateToChatWindow(chatter) {
    this.router.navigate(['/home/cw/' + chatter.userId]);
  }

}
