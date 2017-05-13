if (!__PROD__) {
   console.log('---------------------------------------');
   console.log(new Date());
   console.log('This app is version ' + __VERSION__);
   if (module.hot) module.hot.accept();
   console.log();
}


// TS Module
import * as module1 from './scripts/mymodule';
let a = new module1.IncDec();
a.increment();
a.increment();
a.increment();
a.print('module1');

// JS Module
import * as module2 from './scripts/mylib';
module2.myPrint('module2');

import './style/styles.scss';

// example with interface
interface Person {
    name: string;
    age: number;
}

function sortByName(a: Person[]) {
    let result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

console.log(sortByName([{name: 'Joel', age: 42}, {name: 'Alfred', age: 35}])[0]);

let root =  document.getElementById('root') as HTMLDivElement;

let test2 : HTMLDivElement  = document.createElement("div") as HTMLDivElement;
test2.id = 'test2';
test2.innerHTML = 'green text';
root.appendChild(test2);

let test1 : HTMLDivElement  = document.createElement("div") as HTMLDivElement;
test1.id = 'test1';
let anchor : HTMLAnchorElement   = document.createElement("a") as HTMLAnchorElement ;
anchor.href = '#';
anchor.innerHTML = 'super link';
test1.appendChild(anchor);
root.appendChild(test1);

test2.innerHTML = 'green text v2';

