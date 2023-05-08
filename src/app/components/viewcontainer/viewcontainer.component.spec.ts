import { createPlatform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewcontainerComponent } from './viewcontainer.component';

fdescribe('ViewcontainerComponent', () => {
  let component: ViewcontainerComponent;
  let fixture: ComponentFixture<ViewcontainerComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MatIconModule ],
      declarations: [ ViewcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcontainerComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand and contract main view', () => {
    // expands navbar
    component.adjustNavbar(true);
    expect(component.isExpanded).toBeTruthy();

    // contracts navbar 
    component.adjustNavbar(false);
    expect(component.isExpanded).not.toBeTruthy();
  });

  it('should show and hide transition', () => {
    // shows transition
    component.adjustTransition(true)
    expect(component.isTransitionShown).toBeTruthy();

    // hides transition
    component.adjustTransition(false)
    expect(component.isTransitionShown).not.toBeTruthy();
  });

  it('should redirect to page', () => {
    // redirects to link
    const navSpy = spyOn(router, 'navigate');
    component.redirectToPage('/test');
    expect(navSpy).toHaveBeenCalledOnceWith(['/test']);
  })
});
