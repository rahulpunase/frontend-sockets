import { Component, OnInit, Inject } from '@angular/core';
import { SubjectService } from 'src/app/services/subjects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private subjectService: SubjectService,

    ) { }
  ngOnInit() {
  }

}
