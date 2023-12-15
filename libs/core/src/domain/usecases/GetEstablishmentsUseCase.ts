import { Inject,Injectable } from '@angular/core';

import { USER_REPOSITORY,UserRepository } from '../repository/UserRepository';

@Injectable({
  providedIn: 'root',
})
export class GetEstablishmentsUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private usuarioRepository: UserRepository
  ) {}

  getEstablishments(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.getEstablishments().subscribe(
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
