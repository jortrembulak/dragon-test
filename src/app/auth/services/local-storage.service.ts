import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  set(key: string, object: any): void {
    localStorage.setItem(key, JSON.stringify(object));
  }

  get(key: string): string {
    return localStorage.getItem(key) || '';
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
