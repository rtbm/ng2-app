import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { select } from 'ng2-redux';
import { ISession } from '../reducers/session';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService {
  @select(state => state.session.get('id_token')) private token$: Observable<ISession>;

  private BASE_URL = 'http://localhost:3000/api';
  private HEADERS = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    this.token$.subscribe(token => {
      if (token) {
        this.HEADERS.append('Authorization', `Bearer ${token}`);
      } else if (!token && this.HEADERS.has('Authorization')) {
        this.HEADERS.delete('Authorization');
      }
    });
  }

  post(path, data) {
    return this.http.post(`${this.BASE_URL}${path}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  get(path) {
    return this.http.get(`${this.BASE_URL}${path}`, { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  put(path, id, data) {
    return this.http.put(`${this.BASE_URL}${path}/${id}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  delete(path, id) {
    return this.http.delete(`${this.BASE_URL}${path}/${id}`, { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }
}
