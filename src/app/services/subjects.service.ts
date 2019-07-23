import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { map, debounceTime, take, distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class SubjectService {

    routeSubjectForHeader = new BehaviorSubject(true);
    $rSFHobs = this.routeSubjectForHeader.asObservable();
    _routeSubjectForHeader(data) {
        this.routeSubjectForHeader.next(data);
    }

    constructor() {
    }
}