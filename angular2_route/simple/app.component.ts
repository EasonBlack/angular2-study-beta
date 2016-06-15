import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { AppAbout } from './about.component';
import { AppHome } from './home.component';

@Component({
    selector: 'my-app',
    template: `
           <a [routerLink]="['Home']">Home</a>
           <a [routerLink]="['About']">About</a>
           <div class="outer-outlet">
           <router-outlet></router-outlet>
           </div>
           `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',       component: AppHome, as: 'Home'},
    {path: '/about', component: AppAbout, as: 'About'  }
])

export class MyApp { }