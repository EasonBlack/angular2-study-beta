import {Component} from 'angular2/core';
import { WordService } from '../service/word.service';
import { Word }  from '../model/word';
@Component({
    selector: 'word-wrapper',
    moduleId: module.id,
    providers: [WordService],
    templateUrl: 'Angular2-Study/project/Reciting/component/word.component.html'
})

export class WordWrapper {
    words:  Array<Object>;    //or Word[]
    constructor(private wordService: WordService) {
      wordService.getWords()
        .subscribe(
              words => this.words = words
      );
    }
}