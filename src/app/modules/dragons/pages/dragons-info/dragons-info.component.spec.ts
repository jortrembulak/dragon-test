/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsListComponent } from '../dragons-list/dragons-list.component';
import { DragonsInfoComponent } from './dragons-info.component';

const routes: Routes = [
  { path: 'dragons/dragons-list', component: DragonsListComponent },
];
describe('DragonsInfoComponent', () => {
  let component: DragonsInfoComponent;
  let fixture: ComponentFixture<DragonsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [DragonsInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsInfoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it.only('should create', () => {
    expect(component).toBeTruthy();
  });
});
