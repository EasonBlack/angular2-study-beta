import {bootstrap} from 'angular2/platform/browser';
import { WordWrapper } from '../component/word.component';
import { HTTP_PROVIDERS } from 'angular2/http';

bootstrap(WordWrapper,[
    HTTP_PROVIDERS]);