/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsListComponent } from '../dragons-list/dragons-list.component';
import { DragonsEditComponent } from './dragons-edit.component';

const routes: Routes = [
  { path: 'dragons/dragons-list', component: DragonsListComponent },
];

describe('DragonsEditComponent', () => {
  let component: DragonsEditComponent;
  let fixture: ComponentFixture<DragonsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragonsEditComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
