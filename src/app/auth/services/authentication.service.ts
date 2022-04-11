import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  validateUser(user: User): Observable<any> {
    return new Observable((observer) => {
      if (user.username == 'Dragon' && user.password == 'myDragon') {
        this.setUser(user);
        observer.next({ message: 'Logged with Success' });

        return observer.complete();
      } else {
        observer.error({
          message: 'Wrong User name or password, try again',
        });

        observer.next(false);

        return observer.complete();
      }
    });
  }

  setUser(user: any) {
    this.localStorageService.set('user', user);
  }

  isLogged(): boolean {
    return !!this.localStorageService.get('user');
  }

  logOut(): void {
    this.localStorageService.delete('user');
    this.router.navigate(['']);
  }
}
