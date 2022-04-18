/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsListComponent } from '../dragons-list/dragons-list.component';
import { DragonsAddComponent } from './dragons-add.component';

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
