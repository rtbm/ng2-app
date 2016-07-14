import { Injectable } from '@angular/core';
import { ServerService } from './server';

@Injectable()
export class InvitesService {
  constructor(private serverService: ServerService) {
  }

  save(invite) {
    return new Promise((resolve, reject) => {
      this.serverService.post('/invites', invite)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  remove(_id) {
    return new Promise((resolve, reject) => {
      this.serverService.delete(`/invites/${_id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
