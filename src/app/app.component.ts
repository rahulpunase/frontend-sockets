import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SubjectService } from './services/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'frontend-sockets';
  constructor(private socket: SocketService,
    private subjectService: SubjectService,
    private router: Router) {
  }
  ngOnInit() {
    // this.socket.checkConnection().subscribe(message => {
    //   console.log("ONITIT", message);
    // })
    this.router.events.subscribe(changedRoute => {
      if (changedRoute instanceof NavigationEnd) {
        this.subjectService._routeSubjectForHeader(!(changedRoute.url.indexOf("/home/cw/") === 0));
      }
    });
  }
  emitToCheckConnection() {
    this.socket.emitToCheckConnection("Some awesome message");
  }
}
