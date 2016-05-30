import {Injectable} from '@angular/core';
import {ServerService} from './server';

export interface Article {
  name: string;
  content: string;
}

@Injectable()
export class ArticlesService {
  constructor(private serverService: ServerService) {}

  fetchAll() {
    return new Promise((resolve, reject) => {
      this.serverService.get('/articles')
        .subscribe(
          articles => resolve(articles),
          err => reject()
        );
    });
  }

  read(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/articles/${id}`)
        .subscribe(
          article => resolve(article),
          err => reject()
        );
    });
  }

  save(article: Article) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/articles', article)
        .subscribe(
          article => resolve(article),
          err => reject(article)
        );
    });
  }

  update(article: Article, id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.put('/articles', id, article)
        .subscribe(
          article => resolve(article),
          err => reject(article)
        );
    });
  }

  remove(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.delete('/articles', id)
        .subscribe(
          article => resolve(article),
          err => reject()
        );
    });
  }
}
