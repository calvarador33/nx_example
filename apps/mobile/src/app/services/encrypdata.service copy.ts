import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

const KEY = '@eaxGte2+*.'

@Injectable({
  providedIn: 'root'
})
export class EncrypdataService {

  constructor() { }

  encrypt(value: string) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), KEY).toString();
    return encryptedData;
  }

  decrypt(value: string) {    
    const decryptedBytes = CryptoJS.AES.decrypt(value, KEY);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  };

}
