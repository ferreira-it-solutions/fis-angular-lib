/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotDataComponent } from './not-data.component';

describe('NotDataComponent', () => {
  let component: NotDataComponent;
  let fixture: ComponentFixture<NotDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
