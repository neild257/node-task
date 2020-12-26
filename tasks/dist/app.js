"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const sampleObject = {
    name: "harshit pareek",
    age: 29,
    workplace: 'Extron Electronics',
    status: 'single'
};
const source1$ = rxjs_1.from(Object.values(sampleObject));
// source1$.subscribe(value => console.log(value));
const source2$ = rxjs_1.from([1, 2, 3, 4]);
// source2$.subscribe(value => console.log(value));
rxjs_1.concat(source1$, source2$).subscribe(value => console.log(value));
// Creating first Observable from constructor
// const subscribe = (subscriber: Subscriber<number>) => {
//     for (let i of [1, 2, 3, 4, 5, 6]) {
//         subscriber.next(i);
//     }
//     setTimeout(() => {
//         subscriber.complete();
//     }, 2000);
//     return () => console.log('Tear it down');
// };
// const source$ = new Observable(subscribe);
// source$.subscribe(value => console.log(value));
//# sourceMappingURL=app.js.map