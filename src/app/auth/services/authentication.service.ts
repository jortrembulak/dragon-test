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
      if (user.username == 'dragao' && user.password == '12345') {
        this.setUser(user);
        observer.next({ message: 'Logado com Sucesso' });

        return observer.complete();
      } else {
        observer.error({
          message: 'Usuário ou senha incorretos, tente novamente',
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
