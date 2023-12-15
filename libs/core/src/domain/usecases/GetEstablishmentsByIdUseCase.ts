import { Inject,Injectable } from '@angular/core';

import { USER_REPOSITORY,UserRepository } from '../repository/UserRepository';

@Injectable({
  providedIn: 'root',
})
export class GetEstablishmentsByIdUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private usuarioRepository: UserRepository
  ) {}

  getEstablishmentsById(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.getEstablishmentsById().subscribe(
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
