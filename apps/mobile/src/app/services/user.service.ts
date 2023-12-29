import { Injectable } from '@angular/core';
import { EncrypdataService } from './encrypdata.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private encrypDataService: EncrypdataService) { }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveData(data: any): void {
    window.sessionStorage.clear();
    const userData = this.encrypDataService.encrypt(JSON.stringify(data))
    window.sessionStorage.setItem("userData", userData);
  }

  public getData(): any {
    const user = window.sessionStorage.getItem("userData");
    if (user) {
      const decryptData = this.encrypDataService.decrypt(user)
      return JSON.parse(decryptData);
    }
    return {};
  }

  public getToken(): string {
    const user = window.sessionStorage.getItem("userData");
    if (user) {
      const decryptData = this.encrypDataService.decrypt(user)
      return JSON.parse(decryptData).token;
    }
    return "";
  }

}
