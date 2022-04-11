/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DragonsListComponent } from './dragons-list.component';
import { Routes } from '@angular/router';
import { DragonsAddComponent } from '../dragons-add/dragons-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipe } from 'ng-mocks';
import { OrderByPipe } from 'src/app/shared/pipes/orderBy.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: 'dragons/dragons-add', component: DragonsAddComponent },
];

describe('DragonsListComponent', () => {
  let component: DragonsListComponent;
  let fixture: ComponentFixture<DragonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],

      declarations: [
        DragonsListComponent,
        MockPipe(OrderByPipe, (array: any, field: string) => ['']),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
