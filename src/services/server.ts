import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {select} from 'ng2-redux';
import {ISession} from '../reducers/session';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {
  @select() session$: Observable<ISession>;

  private BASE_URL = 'http://localhost:3000/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    this.session$.subscribe(n => {
      const token = n.get('id_token');

      if(token) {
        this.headers.append('Authorization', `Bearer ${token}`);
      }

      if(!token && this.headers.has('Authorization')) {
        this.headers.delete('Authorization');
      }
    });
  }

  post(path, data) {
    return this.http.post(`${this.BASE_URL}${path}`, JSON.stringify(data), { headers: this.headers })
      .map((res: Response) => res.json());
  }

  get(path) {
    return this.http.get(`${this.BASE_URL}${path}`)
      .map((res: Response) => res.json());
  }

  put(path, id, data) {
    return this.http.put(`${this.BASE_URL}${path}/{${id}`, JSON.stringify(data), { headers: this.headers })
      .map((res: Response) => res.json());
  }

  delete(path, id) {
    return this.http.delete(`${this.BASE_URL}/${path}/${id}`);
  }
}
