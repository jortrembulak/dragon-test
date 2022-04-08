/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragonsListComponent } from './dragons-list.component';

describe('DragonsListComponent', () => {
  let component: DragonsListComponent;
  let fixture: ComponentFixture<DragonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsListComponent ]
    })
    .compileComponents();
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
