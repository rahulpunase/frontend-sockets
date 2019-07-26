import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.less']
})
export class ChatWindowComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private subjectService: SubjectService
  ) { }
  screenHeight: number;

  ngOnInit() {
    this.screenHeight = screen.availHeight - 56;
    this.activateRoute.data.forEach(response => {
      const userInfo = response['userInfo'];
      if(userInfo.success) {
        this.subjectService._activeChatterInfo(userInfo.result);
      }
    })
  }
}
