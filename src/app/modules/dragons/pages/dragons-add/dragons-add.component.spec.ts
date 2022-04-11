/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragonsAddComponent } from './dragons-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { DragonsListComponent } from '../dragons-list/dragons-list.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const routes: Routes = [
  { path: 'dragons/dragons-list', component: DragonsListComponent },
];
describe('DragonsAddComponent', () => {
  let component: DragonsAddComponent;
  let fixture: ComponentFixture<DragonsAddComponent>;
  const id = 1;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [DragonsAddComponent],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
