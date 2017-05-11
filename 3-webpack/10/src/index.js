import 'style.css';
import * as t from 'mylib';
import moment from 'moment';

console.log(moment().format());
t.myPrint("Hello!");

if (!__PROD__) {
   console.log('This app is version ' + __VERSION__);
}

