import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class GetUserInfoResolver implements Resolve<any>{

  constructor(private api: ApiService) { }

  resolve(activate: ActivatedRouteSnapshot) {
    return this.api.getUserInfo(activate.params.chatterId).toPromise().then(data => data);
  }
}
