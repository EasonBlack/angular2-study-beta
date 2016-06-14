import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { Observable }  from 'rxjs/Observable';
import { Word }  from '../model/word';
import 'rxjs/add/operator/map'

@Injectable()
export class WordService {
    constructor (private http: Http) {};
    private wordsUrl = '/Angular2-Study/project/Reciting/data/words.json';
    getWords() {
        return this.http.get(this.wordsUrl)
            .map(res => res.json())
    }
    //private extractData(res: Response) {
    //    let data = res.json();
    //    console.log(data);
    //    return data || { };
    //}

}