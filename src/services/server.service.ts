import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  private BASE_URL = 'http://localhost:3000/api';
  private HEADERS = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  setHeaders() {
    const id_token = localStorage.getItem('id_token');

    if (id_token && !this.HEADERS.has('Authorization')) {
      this.HEADERS.append('Authorization', `Bearer ${id_token}`);
    } else if (!id_token && this.HEADERS.has('Authorization')) {
      this.HEADERS.delete('Authorization');
    }
  }

  post(path, data) {
    this.setHeaders();

    return this.http.post(`${this.BASE_URL}${path}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  get(path) {
    this.setHeaders();

    return this.http.get(`${this.BASE_URL}${path}`, { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  put(path, data) {
    this.setHeaders();

    return this.http.put(`${this.BASE_URL}${path}`, JSON.stringify(data), { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }

  delete(path) {
    this.setHeaders();

    return this.http.delete(`${this.BASE_URL}${path}`, { headers: this.HEADERS })
      .map((res: Response) => res.json());
  }
}
