import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class GetUsersResolver implements Resolve<any>{

  constructor(private api: ApiService) { }

  resolve() {
    return this.api.getUsers().toPromise().then(data => data);
  }
}
