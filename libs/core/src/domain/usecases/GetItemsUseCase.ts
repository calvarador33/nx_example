import { Inject,Injectable } from '@angular/core';

import { USER_REPOSITORY,UserRepository } from '../repository/UserRepository';

@Injectable({
  providedIn: 'root',
})
export class GetItemsUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private usuarioRepository: UserRepository
  ) {}

  getItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.getItems().subscribe(
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
