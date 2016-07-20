import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable()
export class InvitesService {
  constructor(private serverService: ServerService) {
  }

  save(invite) {
    return this.serverService.post('/invites', invite);
  }

  remove(_id) {
    return this.serverService.delete(`/invites/${_id}`);
  }
}
