import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { TopNav } from './components/top-nav/top-nav';
import { Sidebar } from './components/sidebar/sidebar';
import { BottomNav } from './components/bottom-nav/bottom-nav';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterOutlet,
    NgClass,
    TopNav,
    Sidebar,
    BottomNav
  ]
})
export class App {
  isSidebarVisible = true;
  isBrowser = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.isSidebarVisible = window.innerWidth >= 853;

      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          if (window.innerWidth < 853) {
            this.isSidebarVisible = false;
          }
        });
    }
  }

  toggleSidebar() {
    if (this.isBrowser) {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }

  onResize() {
    if (this.isBrowser && window.innerWidth >= 853) {
      this.isSidebarVisible = true;
    }
  }
}
