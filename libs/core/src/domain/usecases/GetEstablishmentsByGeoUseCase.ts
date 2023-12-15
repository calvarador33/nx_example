import { Inject,Injectable } from '@angular/core';

import { USER_REPOSITORY,UserRepository } from '../repository/UserRepository';

@Injectable({
  providedIn: 'root',
})
export class GetEstablishmentsByGeoUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private usuarioRepository: UserRepository
  ) {}

  getEstablishmentsByGeo(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.getEstablishmentsByGeo().subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
