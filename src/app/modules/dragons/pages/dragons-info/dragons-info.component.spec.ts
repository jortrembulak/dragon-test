/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
      ],
      declarations: [DragonsInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsInfoComponent);
    component = fixture.componentInstance;
    component.dragon = {};

    fixture.detectChanges();
  });

  it('should create', () => {
    component.dragon = {
      id: '1',
      name: 'Dragon 1',
      type: 'type 1',
      histories: [],
      createdAt: new Date(),
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
