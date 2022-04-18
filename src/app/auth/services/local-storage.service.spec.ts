/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('Service: LocalStorage', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

    service = TestBed.inject(LocalStorageService);

    let store: { [key: string]: string } = {};
    const mockLocalStorage = {
      getItem: (key: string): string | null => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };

    jest.spyOn(localStorage, 'getItem');
    jest.spyOn(localStorage, 'setItem');
    jest.spyOn(localStorage, 'removeItem');
    jest.spyOn(localStorage, 'clear');
  });

  it('should create the service', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should store a value in localStorage', () => {
    const user_name = 'jordana';
    service.set('user_name', user_name);

    expect(localStorage.getItem('user_name')).toMatch('jordana');
  });

  it('should  get a stored value in localStorage', () => {
    const user_name = 'jordana';
    localStorage.setItem('user_name', user_name);

    expect(service.get('user_name')).toMatch('jordana');
  });

  it('should delete a stored value in localStorage by key name', () => {
    const user_name = 'jordana';
    localStorage.setItem('user_name', user_name);

    expect(service.delete('user_name')).toBeUndefined();
  });
});
