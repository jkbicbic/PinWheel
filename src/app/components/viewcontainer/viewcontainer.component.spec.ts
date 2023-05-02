import { createPlatform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontainerComponent } from './viewcontainer.component';

fdescribe('ViewcontainerComponent', () => {
  let component: ViewcontainerComponent;
  let fixture: ComponentFixture<ViewcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand', () => {
    const isExpanded = false;

    expect(isExpanded).toBeTruthy();
  });

  it('should show transition', () => {
    const showTransition = false;

    expect(showTransition).toBeTruthy();
  })
});
