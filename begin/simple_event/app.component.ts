import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'Angular2-Study/begin/simple_event/app.component.html',
    styleUrls: ['Angular2-Study/begin/simple_event/app.component.css']
})

export class MyApp {
    name: string = 'World';
    clicked(event) {
       alert(123);
    }
}
