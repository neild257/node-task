import { Observable, of, from, fromEvent, concat} from 'rxjs';

const sampleObject = {
    name: "harshit pareek",
    age: 29,
    workplace: 'unknown',
    status: 'single'
};


const source1$ = from(Object.values(sampleObject));

// source1$.subscribe(value => console.log(value));

const source2$ = from([1, 2, 3, 4]);

// source2$.subscribe(value => console.log(value));

concat(source1$, source2$).subscribe(value => console.log(value));

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
