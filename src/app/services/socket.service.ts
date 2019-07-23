import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  constructor() { }
  private socket;
  private url = environment.apiUrl;

  emitToCheckConnection(message) {
    this.socket.emit('add-message', message);
  }

  checkConnection() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
