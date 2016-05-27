import {Injectable} from '@angular/core';
import {ServerService} from './server';

interface Query {
  search: string;
}

@Injectable()
export class SearchService {
  constructor(private serverService: ServerService) {}

  search(query: Query) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/search', query)
        .subscribe(
          results => resolve(results),
          err => reject(query)
        );
    });
  }
}
