import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SubjectService } from 'src/app/services/subjects.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  applicationDisplayName = environment.applicationDisplayName;
  headerShow: boolean = true;
  constructor(
    private subjectService: SubjectService,
    @Inject(DOCUMENT) private _document: Document

    ) { }
  ngOnInit() {
    console.log(this._document);
    this.subjectService.$rSFHobs.subscribe(bool => {
      this.headerShow = bool;
    })
  }

}
