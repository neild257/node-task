// callback hell example when trying to apply multiple callbacks

// const fs = require('fs');
// const { promisify } = require('util');
// const writeFileAsync = promisify(fs.writeFile);
// const unLinkFileAsync = promisify(fs.unlink);
// const readDirAsync = promisify(fs.readdir);

// const beep = () => process.stdout.write("\x07");
const logUpdate = require('log-update');
const toX = () => 'X';
const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

// Trying to create a promise queue that can run multiple promises 
// at the same time
const tasks = [
    delay(4),
    delay(6),
    delay(4),
    delay(3),
    delay(5),
    delay(7),
    delay(9),
    delay(10),
    delay(3),
    delay(5)
];

class PromiseQueue {
    constructor(promises = [], concurrentCount = 1) {
        // length of the concurrent taskes
        this.concurrentCount = concurrentCount;
        // length of the total tasks
        this.total = promises.length;
        // the taskes that has to be done
        this.todo = promises;
        // tasks that are currently running
        this.running = [];
        // tasks that are completed
        this.completed = [];
    }

    get runAnother() {
        return (this.running.length < this.concurrentCount) && this.todo.length;
    }

    visualizeTasks() {
        const { todo, running, completed } = this;

        logUpdate(`
        
            todo: [${todo.map(toX)}]
            running: [${running.map(toX)}]
            completed: [${completed.map(toX)}]

        `);
    }

    run() {
        while(this.runAnother) {
            // first take out the promise
            const promise = this.todo.shift();
            // add this to the running tasks
            this.running.push(promise);
            // after it is completed put that in the completed list
            promise.then(() => {
                this.completed.push(this.running.shift());

                // see the state of the tasks before running it again
                this.visualizeTasks();

                // run again to check whether we can run it 
                // if yes then run one more task
                this.run();
            });

            // call the logUpdate to see the states of the arrays
            this.visualizeTasks();
        }
    }
}

const promiseQueue = new PromiseQueue(tasks, 3);
promiseQueue.run();


// Promise.race will make us to put multiple promises in the parallel 
// and will resolve when earliest has resolved (delay(2)) but the whole promise
// will be resolved after the everyone is done (delay(5)). 
// const multiPromise = Promise.race([
//     delay(5),
//     delay(2),
//     delay(3),
//     delay(5)]);

    
// const start = async () => {
//     const firstOfAll = await multiPromise;
//     const files = await readDirAsync(__dirname);
//     console.log(files);
// };

// start();

// using promise.all to wait for multiple promises to wait using async/await
// const multiPromise = Promise.all([
//     writeFileAsync('readme.md', 'Hello World'),
//     writeFileAsync('readme.txt', 'Hello World'),
//     writeFileAsync('readme.json', '{ "hello": "world" }')]);
// const start = async () => {
//     const afterAll = await multiPromise;
//     const files = await readDirAsync(__dirname);
//     console.log(files);
// };

// start();

// reading all the files present in the current directory
// async function start() {
//     const files = await readDirAsync(__dirname);
//     console.log(files);
// }

// start();

// writing the sequential file access and deleting by async/await
// const doStuffSequencially = async () => {
//     console.log('starting function..');
//     await delay(1);
//     console.log('waiting...');
//     await delay(2);
//     await writeFileAsync('file.txt', 'Sample file created');
//     beep();
//     console.log('file created...');
//     await delay();
//     await unLinkFileAsync('file.txt');
//     beep();
//     console.log('file removed...');
// };

// doStuffSequencially();
// Promise.resolve() will call the resolve right away
// const doStuffSequencially = Promise.resolve()
//     .then(() => 'starting function')
//     .then(console.log)
//     .then(() => delay(1))
//     .then(() => 'waiting...')
//     .then(console.log)
//     .then(() => delay(2))
//     .then(() => writeFileAsync('file.txt', 'Sample file created...'))
//     .then(beep)
//     .then(() => 'file created..')
//     .then(console.log)
//     .then(delay(3))
//     .then(() => unLinkFileAsync('file.txt'))
//     .then(beep)
//     .then(() => 'file is removed..')
//     .then(console.log)
//     .catch(console.log);

// promisifying the writing and reading of files
// const fs = require('fs');
// const { promisify } = require('util');

// const writeAsync = promisify(fs.writeFile);


// writeAsync('sample.txt', 'This has been written Async!')
//     .then(() => console.log('Sucess creating new file'))
//     .catch((err) => console.log(`Error creating file ${err.message}`));


// converting a callback structure to promises by using promisify in the node library
// const { promisify } = require('util');

// const delay = (seconds, callback) => {
//     if(seconds > 3) {
//         callback(new Error(`${seconds} is too long!`));
//     } else {
//         setTimeout(() => {
//             callback(null, `Resolved after ${seconds} seconds.`);
//         }, seconds * 1000);
//     }
// };


// delay(2, (error, result) => {
//     if(error) {
//        console.log(`error: ${error}`); 
//     } else {
//         console.log(`result: ${result}`); 
//     }
// });

// const delayPromise = promisify(delay);

// delayPromise(4)
//     .then((res) => console.log(`result: ${res}`))
//     .catch((err) => console.log(`error: ${err}`));

// console.log('End');

// const delay = (seconds) => {
//     return new Promise((resolve, reject) => {
//         seconds > 3 ? reject(new Error(`${seconds} is too long!`)) : setTimeout(() => {
//             resolve('Resolved after 1 sec.');
//         }, seconds * 1000);
//     });
// };


// // Just providing the function as console.log will take one argument too.
// delay(4)
//     .then(console.log)
//     .then(() => 3)
//     .then((number) => console.log(`The Number is: ${number}`))
//     .catch((err) => console.log(`error: ${err.message}`));

// console.log('End');

// const handleString = (str, done) => {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }

// handleString('Hello World', (replacedString) => {
//     console.log(replacedString);
// });

// console.log('End');


