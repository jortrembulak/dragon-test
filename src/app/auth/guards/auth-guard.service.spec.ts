/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{ path: '', component: LoginComponent }];
describe('Service: AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [AuthGuardService],
    });
  });

  it('should create', inject(
    [AuthGuardService],
    (service: AuthGuardService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return true and not redirect to login', inject(
    [AuthGuardService, Router],
    (auth: AuthGuardService, router: Router) => {
      jest
        .spyOn(auth['authenticationService'], 'isLogged')
        .mockImplementation(() => {
          return true;
        });

      jest.spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeTruthy();
      expect(router.navigate).not.toHaveBeenCalled();
    }
  ));

  it('should redirect to login and return false', inject(
    [AuthGuardService, Router],
    (auth: AuthGuardService, router: Router) => {
      jest
        .spyOn(auth['authenticationService'], 'isLogged')
        .mockImplementation(() => {
          return false;
        });

      jest.spyOn(router, 'navigate');

      expect(auth.canActivate()).toBeFalsy();
      expect(router.navigate).toHaveBeenCalled();
    }
  ));
});
