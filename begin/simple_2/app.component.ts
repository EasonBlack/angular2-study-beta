import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App. Hello {{name}}</h1>'
})

export class MyApp {
    name: string = 'World';
}
