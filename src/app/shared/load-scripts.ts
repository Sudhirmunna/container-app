import {
  CanActivate,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CanLoadScripts implements CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (state) {
      return this.generateScript(state.url);
    }
  }

  generateScript(url: string) {
    const mScripts = SCRIPTS.filter(x => x.url === url);
    mScripts.forEach(y => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = y.src;
      document.getElementsByTagName('head')[0].appendChild(script);
    });
    return true;
  }
}

export const SCRIPTS = [
  {
    name: 'loginApp',
    url: '/',
    src: 'http://localhost:4500/login-app.js'
  },
  {
    name: 'loginApp',
    url: '/login',
    src: 'http://localhost:4500/login-app.js'
  },
  {
    name: 'microAppA',
    url: '/dashboard',
    src: 'http://localhost:4300/micro-app-a.js'
  },
  {
    name: 'microAppB',
    url: '/dashboard',
    src: 'http://localhost:4400/micro-app-b.js'
  },
  { name: 'reactApp', url: '/dashboard', src: 'http://localhost:5002/main.js' },
  {
    name: 'vueApp',
    url: '/dashboard',
    src: 'http://localhost:5003/app.1ecec079.js'
  }
];
