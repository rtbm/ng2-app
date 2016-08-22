import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  private HEADERS = new Headers({ 'Content-Type': 'application/json' });
  private API_URL = `${__BASE_URL__}/api`;

  constructor(private http: Http) {
  }

  setHeaders() {
    const id_token = localStorage.getItem('id_token');

    if (id_token) {
      this.HEADERS.set('Authorization', `Bearer ${id_token}`);
    } else {
      this.HEADERS.delete('Authorization');
    }
  }

  post(path, data) {
    this.setHeaders();

    return this.http.post(`${this.API_URL}${path}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  get(path) {
    this.setHeaders();

    return this.http.get(`${this.API_URL}${path}`, { body: '', headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  put(path, data) {
    this.setHeaders();

    return this.http.put(`${this.API_URL}${path}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  delete(path) {
    this.setHeaders();

    return this.http.delete(`${this.API_URL}${path}`, { body: '', headers: this.HEADERS })
      .map((res: Response) => res.json());
  }
}
