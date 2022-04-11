/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user';
import { LoginComponent } from '../pages/login/login.component';
import { AuthenticationService } from './authentication.service';

const routes: Routes = [{ path: '', component: LoginComponent }];

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [AuthenticationService],
    });
  });

  it('should create service', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return true if user is logged', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      localStorage.setItem('user', 'dragon');

      expect(service.isLogged()).toBeTruthy();
    }
  ));

  it('should return false if user is not logged', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      localStorage.removeItem('user');

      expect(service.isLogged()).toBeFalsy();
    }
  ));

  it('should remove user from localStorage', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      localStorage.removeItem('user');

      expect(localStorage.getItem('user')).toBeFalsy();
    }
  ));

  it('should set user from localStorage', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      const user = 'draggon';
      localStorage.setItem('user', user);

      expect(localStorage.getItem('user')).toBeTruthy();
    }
  ));

  it('should validate user and password and return', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      let mockUser: User = { username: 'Dragon', password: 'myDragon' };

      service.validateUser(mockUser).subscribe({
        next: (event) => {
          expect(event.message).toBe('Logged with Success');
          expect(service.setUser).toHaveBeenCalledWith(mockUser);
        },
        error: (error) => {
          expect(true).toBeFalsy(); // dont need to enter here!
        },
      });
    }
  ));

  it('should validate user and password is correct ', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      let mockUser: User = { username: 'Dragon', password: 'myDragon' };

      service.validateUser(mockUser).subscribe({
        next: (event) => {
          expect(event.message).toBe('Logged with Success');
          expect(service.setUser).toHaveBeenCalledWith(mockUser);
        },
      });
    }
  ));

  it('should validate user and password is incorrect ', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      let mockUser: User = { username: 'Dragons', password: 'myDragon' };

      service.validateUser(mockUser).subscribe({
        next: (event) => {
          expect(event).not.toBeCalled();
        },
        error: (error) => {
          expect(error.message).toBe('Wrong User name or password, try again');
        },
      });
    }
  ));
});
