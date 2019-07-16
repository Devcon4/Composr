import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v1';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public sessionId = uuid();

  constructor(private httpClient: HttpClient) {
    httpClient.post('/composr/api/createSession', this.sessionId).subscribe();
  }
}
