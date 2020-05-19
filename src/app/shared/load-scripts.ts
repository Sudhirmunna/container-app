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
      if (!y.isLoaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = y.src;
        y.isLoaded = true;
        document.getElementsByTagName('head')[0].appendChild(script);
        if (y.name === 'vueApp') {
            this.loadCSS(y);
        }
      }
    });
    return true;
  }

  generateScriptOnEvent(name: string) {
    const mScripts = SCRIPTS.filter(x => x.name === name);
    mScripts.forEach(y => {
      if (!y.isLoaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = y.src;
        y.isLoaded = true;
        document.getElementsByTagName('head')[0].appendChild(script);
        if (y.name === 'vueApp') {
          this.loadCSS(y);
        }
      }
    });
    return true;
  }
  loadCSS(y: any) {
    const style = document.createElement('link');
    style.type = 'text/css';
    style.href = y.cssSrc;
    y.isLoaded = true;
    style.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

// configure the script to load based on route or event
export const SCRIPTS = [
  {
    name: 'loginApp',
    url: '/',
    src: 'http://localhost:4500/login-app.js',
    isLoaded: false
  },
  {
    name: 'loginApp',
    url: '/login',
    src: 'http://localhost:4500/login-app.js',
    isLoaded: false
  },
  {
    name: 'homeApp',
    url: '/home',
    src: 'http://localhost:4600/home-app.js',
    isLoaded: false
  },
  {
    name: 'microAppA',
    url: '/dashboard',
    src: 'http://localhost:4300/micro-app-a.js',
    isLoaded: false
  },
  {
    name: 'microAppB',
    url: '/dashboard',
    src: 'http://localhost:4400/micro-app-b.js',
    isLoaded: false
  },
  {
    name: 'reactApp',
    src: 'http://localhost:5002/main.js',
    isLoaded: false
  },
  {
    name: 'vueApp',
    url: '/reuse',
    src: 'http://localhost:5003/js/app.c4c036be.js',
    isLoaded: false,
    cssSrc: 'http://localhost:5003/css/app.1309f02a.css'
  }
];
