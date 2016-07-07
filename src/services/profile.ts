import { Injectable } from '@angular/core';
import { ServerService } from './server';

export interface Profile {
  id: String;
  profile: {
    first_name: string;
    last_name: string;
    bio: string;
  };
}

@Injectable()
export class ProfileService {
  constructor(private serverService: ServerService) {
  }

  read(id: string) {
    return new Promise((resolve, reject) => {
      this.serverService.get(`/profiles/${id}`)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  update(id: string, profile: Profile) {
    return new Promise((resolve, reject) => {
      this.serverService.put('/profiles', id, profile)
        .subscribe(
          res => resolve(res),
          err => reject(err)
        );
    });
  }
}
