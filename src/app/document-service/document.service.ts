import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  get myCookie() {
    let cookies;

    try {
      cookies = this.document.cookie;
    } catch (e) {
      // catch error if document is not defined
      console.error('Cookie error', e);
      return null;
    }

    const cookie = cookies
      .split('; ')
      .map((c) => c.split('='))
      .find(([name]) => name === 'my-cookie');

    return cookie?.[1] ?? null;
  }
}
