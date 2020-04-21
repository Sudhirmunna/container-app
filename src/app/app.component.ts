import { Component, ViewChild, ElementRef, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  showHeaderLinks = false;
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // console.log(this.router.routerState);
    // this.router
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e);
        if (e.url && (e.url === '/' || e.url === '/login')) {
          this.showHeaderLinks = false;
        } else {
          this.showHeaderLinks = true;
        }
      }
    });
  }
}
