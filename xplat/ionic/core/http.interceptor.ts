import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { from,Observable } from 'rxjs';

const headerList = ['application/x-www-form-urlencoded'];

type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'head'
  | 'delete'
  | 'upload'
  | 'download';

@Injectable()
export class NativeHttpInterceptor implements HttpInterceptor {
  

  constructor(private nativeHttp: HTTP, private platform: Platform) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return next.handle(request);
    if (
      !this.platform.is('cordova') ||
      request.url.indexOf('./assets/i18n') >= 0 ||
      request.url.indexOf('identity-validation') >= 0 ||
      request.url.indexOf('s3.amazonaws.com') >= 0 ||
      request.url.indexOf('account/v2/register-parameters') >= 0
    ) {
      return next.handle(request);
    }

    return from(this.handleNativeRequest(request));
  }

  private async handleNativeRequest(
    request: HttpRequest<any>
  ): Promise<HttpResponse<any>> {
    const headerKeys = request.headers.keys();
    const headers: { [key: string]: string  } = {};

    let serializerRequest = 'json';

    headerKeys.forEach((key) => {
      headers[key] = request.headers.get(key) || '';
      if (this.validateUrlencodedList(headers[key])) {
        serializerRequest = 'utf8';
      }
    });

    try {
      await this.platform.ready();

      const method = <HttpMethod>request.method.toLowerCase();

      let nativeHttpResponse;

      if (serializerRequest === 'utf8') {
        nativeHttpResponse = await this.nativeHttp.sendRequest(request.url, {
          method: method,
          data: request.body,
          headers: headers,
          serializer: 'utf8',
        });
      } else {
        nativeHttpResponse = await this.nativeHttp.sendRequest(request.url, {
          method: method,
          data: request.body,
          headers: headers,
          serializer: 'json',
        });
      }

      let body;

      try {
        body = JSON.parse(nativeHttpResponse.data);
      } catch (error: any) {
        body = { response: nativeHttpResponse.data };
      }

      const response = new HttpResponse({
        body: body,
        status: nativeHttpResponse.status,
        headers: (nativeHttpResponse.headers as unknown) as HttpHeaders,
        url: nativeHttpResponse.url,
      });

      return Promise.resolve(response);
    } catch (error: any) {
      if (!error.status) {
        return Promise.reject(error);
      }

      const response = new HttpResponse({
        body: JSON.parse(error.error),
        status: error.status,
        headers: error.headers,
        url: error.url,
      });

      return Promise.reject(response);
    }
  }

  private validateUrlencodedList(url: string): boolean {
    for (let i = 0; i < headerList.length; i += 1) {
      if (url.indexOf(headerList[i]) > -1) return true;
    }

    return false;
  }
}