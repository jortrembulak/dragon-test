/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DragonsListComponent } from '../pages/dragons-list/dragons-list.component';
import { DragonsResolverService } from './dragons-resolver.service';

const routes: Routes = [
  { path: 'dragons/dragons-list', component: DragonsListComponent },
];

describe('Service: DragonsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      providers: [DragonsResolverService],
    });
  });

  it('should ...', inject(
    [DragonsResolverService],
    (service: DragonsResolverService) => {
      expect(service).toBeTruthy();
    }
  ));
});
