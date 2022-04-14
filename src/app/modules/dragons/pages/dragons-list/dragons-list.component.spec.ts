/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipe } from 'ng-mocks';
import { OrderByPipe } from 'src/app/shared/pipes/orderBy.pipe';
import { DragonsAddComponent } from '../dragons-add/dragons-add.component';
import { DragonsListComponent } from './dragons-list.component';

const routes: Routes = [
  { path: 'dragons/dragons-add', component: DragonsAddComponent },
];

describe('DragonsListComponent', () => {
  let component: DragonsListComponent;
  let fixture: ComponentFixture<DragonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
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
