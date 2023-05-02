import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcontainer',
  templateUrl: './viewcontainer.component.html',
  styleUrls: ['./viewcontainer.component.scss']
})

export class ViewcontainerComponent {
  constructor(
    private router: Router,
  ) {}

  isExpanded: boolean = false;
  isTransitionShown: boolean = false;

  adjustNavbar(expand: boolean): void {
    this.isExpanded = expand;
  }

  adjustTransition(show: boolean): void {
    this.isTransitionShown = show;
  }

  redirectToPage(link: string): void {
    this.router.navigate([link]);
  }

}
