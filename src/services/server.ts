import {Injectable} from '@angular/core';
import {Http, Request, Response, Headers} from '@angular/http';

const headers = new Headers({ 'Content-Type': 'application/json'});

@Injectable()
export class ServerService {
    private BASE_URL = 'http://localhost:3000/api';

    constructor(private http: Http) {}

    post(path, data) {
        return this.http.post(`${this.BASE_URL}${path}`, JSON.stringify(data), {headers})
            .map((res: Response) => res.json());
    }

    get(path) {
        return this.http.get(`${this.BASE_URL}${path}`)
            .map((res: Response) => res.json());
    }

    put(path, id, data) {
        return this.http.put(`${this.BASE_URL}${path}/{${id}`, JSON.stringify(data), {headers})
            .map((res: Response) => res.json());
    }

    delete(path, id) {
        return this.http.delete(`${this.BASE_URL}/${path}/${id}`);
    }
}
