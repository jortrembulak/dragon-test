/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsListComponent } from 'src/app/modules/dragons/pages/dragons-list/dragons-list.component';
import { User } from '../../models/user';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'dragons/dragons-list', component: DragonsListComponent },
];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form correctly with an user', () => {
    const user: User = { username: 'Dragon', password: 'myDraggon' };
    component.createForm(user);

    expect(component.loginForm.value.username).toBe('Dragon');
    expect(component.loginForm.value.password).toBe('myDraggon');
  });

  it('should login and redirect to list', () => {
    const user: User = { username: 'dragao', password: '12345' };
    jest.spyOn(component['router'], 'navigate');

    component.loginForm.patchValue({ ...user });
    component.onSubmit();

    expect(component.submitted).toBeTruthy();
    expect(component['router'].navigate).toHaveBeenCalled();
    expect(component.showInvalidCredentials).toBeFalsy();
    expect(component.errorMessage).toBeUndefined();
  });

  it('should not login and show error message', () => {
    const user: User = { username: 'other', password: 'myDragon' };
    jest.spyOn(component['router'], 'navigate');

    component.loginForm.patchValue({ ...user });
    component.onSubmit();

    expect(component.submitted).toBeTruthy();
    expect(component['router'].navigate).not.toHaveBeenCalled();
    expect(component.showInvalidCredentials).toBeTruthy();
    expect(component.errorMessage).toBe(
      'Usuário ou senha incorretos, tente novamente'
    );
  });
});
