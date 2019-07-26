import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subjects.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  headerShow: boolean = true;
  applicationDisplayName = environment.applicationDisplayName;
  chatterInfo = null;
  chatWindowMenuButtons: Array<{
    label: string,
    icon: string,
    linkPath: string
  }> = [];
  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    /** ------------------------------------------ */
    this.chatWindowMenuButtons = [
      {
        label: 'Settings',
        icon: 'settings',
        linkPath: '/settings'
      },
      {
        label: 'View Contact',
        icon: 'contacts',
        linkPath: '/viewcontact'
      },
      {
        label: 'Media',
        icon: 'perm_media',
        linkPath: '/viewmedia'
      },
      {
        label: 'Search',
        icon: 'search',
        linkPath: '/search/search'
      }
    ]
    /** ------------------------------------------ */
    this.subjectService.$rSFHobs.subscribe(bool => {
      this.headerShow = bool;
    });
    this.subjectService.$aCIobs.subscribe(chatterInfo => {
      if(chatterInfo!=null) {
        this.chatterInfo = chatterInfo;      
      }
    })
  }
  private navigate(to) {
    console.log(to);
  }

  get activeChatterName() {
    if(this.chatterInfo!=null) {
      return this.chatterInfo.firstName + ' ' + this.chatterInfo.lastName; 
    } else {
      return '';
    }
  }


}
