import { Observable, Subscriber } from 'rxjs';

const subscribe = (subscriber: Subscriber<number>) => {
    for (let i of [1, 2, 3, 4, 5, 6]) {
        subscriber.next(i);
    }

    setTimeout(() => {
        subscriber.complete();
    }, 2000);

    return () => console.log('Tear it down');
};

const source$ = new Observable(subscribe);

source$.subscribe(value => console.log(value));
