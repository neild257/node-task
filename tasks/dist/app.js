"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const subscribe = (subscriber) => {
    for (let i of [1, 2, 3, 4, 5, 6]) {
        subscriber.next(i);
    }
    setTimeout(() => {
        subscriber.complete();
    }, 2000);
    return () => console.log('Tear it down');
};
const source$ = new rxjs_1.Observable(subscribe);
source$.subscribe(value => console.log(value), null, () => console.log('complete'));
//# sourceMappingURL=app.js.map