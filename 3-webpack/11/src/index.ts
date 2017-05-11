
if (!__PROD__) {
   console.log('This app is version ' + __VERSION__);
}

// TS Module
import * as module1 from './mymodule'; 
var a = new module1.IncDec();
a.increment();
a.increment();
a.increment();
a.print('module1');

// JS Module
import * as module2 from './mylib'; 
module2.myPrint('module2');

// External Lib
import * as module3 from 'moment'; // npm install -S @types/moment
console.log('module3 '+module3().format());

import './styles.scss';

// example with interface
interface Person {
    name: string;
    age: number;
}

function sortByName(a: Person[]) {
    var result = a.slice(0);
    result.sort((x,y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

console.log(sortByName([{name: "Joel", age: 42},{name: "Alfred", age: 35}])[0]);


