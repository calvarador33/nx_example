import { Inject,Injectable } from '@angular/core';

import { USER_REPOSITORY,UserRepository } from '../repository/UserRepository';

@Injectable({
  providedIn: 'root',
})
export class GetLoginUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private usuarioRepository: UserRepository
  ) {}

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usuarioRepository.login(email, password).subscribe(
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
