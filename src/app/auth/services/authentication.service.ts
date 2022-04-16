import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  validateUser(user: User): Observable<any> {
    return new Observable((observer) => {
      if (user.username == 'dragao' && user.password == '12345') {
        this.setUser(user);
        observer.next({ message: 'Logado com Sucesso' });

        this.loggedIn.next(true);
        return observer.complete();
      } else {
        observer.error({
          message: 'Usuário ou senha incorretos, tente novamente',
        });

        observer.next(false);
        this.loggedIn.next(false);

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
    this.loggedIn.next(false);
  }
}
