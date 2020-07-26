// creating a transform duplex
const { Transform } = require('stream');  

class ReplaceString extends Transform {

    constructor(char) {
        super();
        this.replaceChar = char;
    }

    _transform(chunk, encoding, callback) {
        const transformedString = chunk
            .toString()
            .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
        this.push(transformedString);
        callback();
    }


    _flush(callback) {
        this.push('This can get more stuff...');
        callback();
    }

}

const xTransform = new ReplaceString('x');

process.stdin
    .pipe(xTransform)
    .pipe(process.stdout);

// duplex streams are the streams can readable and writable stream at the same time
// const { createReadStream, createWriteStream } = require('fs');
// const { Duplex, PassThrough } = require('stream'); 

// class Throttle extends Duplex {
//     constructor(delayMs) {
//         super();
//         this.delay = delayMs;
//     }
    
//     _write(chunk, encoding, callback) {
//         this.push(chunk);
//         setTimeout(callback, this.delay);
//     }
//     _read() {}
//     _final() {
//         // final method is when we are not getting any data from the readstream
//         // so we want to push null into the writestream
//         this.push(null);
//     }
// }

// const duplexReporting = new PassThrough();
// const throttle = new Throttle(100);

// const readPowderStream = createReadStream('powder-day.mp4');
// const writePowderStream = createWriteStream('copy.mp4');

// let total = 0;
// duplexReporting.on('data', (data) => {
//     total += data.length;
//     console.log('Total bytes passed: ', total);
// });

// readPowderStream
//     .pipe(throttle)
//     .pipe(duplexReporting)
//     .pipe(writePowderStream);


// pipe can be used to pipe any readable stream to writable stream
// const { createReadStream, createWriteStream } = require('fs');

// const writeFileFromStdin = createWriteStream('readme.txt');

// process.stdin.pipe(writeFileFromStdin).on('error', (err) => console.log(err));

// const readPowderStream = createReadStream('powder-day.mp4');
// const writePowderStream = createWriteStream('copy.mp4');

// readPowderStream.pipe(writePowderStream);

// writable streams and copying the powder-day.mp4 to a copy.mp4
// const { createReadStream, createWriteStream } = require('fs');

// const readPowderStream = createReadStream('powder-day.mp4');
// // by putting the high water mark we are deciding the widht of our hose
// // if it is larger it will have less back pressure
// const writePowderStream = createWriteStream('copy.mp4', {
//     highWaterMark: 134563
// });

// readPowderStream.on('data', (chunk) => {
//     const result = writePowderStream.write(chunk);

//     if(!result) {
//         console.log('BackPressure');
//         // backpressure has occured and our hose cannot handle more data
//         // so pause the data untill it drain
//         readPowderStream.pause();
//     }
// });

// readPowderStream.on('error', (err) => {
//     console.log(err);
// });

// readPowderStream.on('end', () => {
//     writePowderStream.close();
// });

// writePowderStream.on('drain', () => {
//     console.log('drained');
//     // now we can resume pushing the data again as hose has drained
//     readPowderStream.resume();
// });


// Flowing and non flowing strams in the node.js
// const fs = require('fs');

// // flowing steam which will put all the data into the stream with any event/asking.
// const powderStream = fs.createReadStream('./powder-day.mp4');

// powderStream.on('data', (chunk) => {
//     console.log('stream chunk length: ', chunk.length);
// });

// powderStream.on('end', () => {
//     console.log('stream has ended');
// });

// powderStream.on('error', (err) => {
//     console.log(err);
// });

// // the way of chaging the flowing stream into non-flowing stream.
// powderStream.pause();

// // non-flowing where we have to ask to push the data.
// process.stdin.on('data', (chunk) => {
//     if (chunk.toString().trim() === 'end') {
//         // resuming the stream to flowing mode
//         powderStream.resume();
//     }
//     powderStream.read();
// });

// understanding the stream of the node js
// const { Readable } = require('stream');

// // A custom implementation of the Readable that will implement stream creation for the array
// class StreamForArray extends Readable {
    
//     constructor(array) {
//         // the stream can read binary or string making utf-8 will make sure 
//         // it will read as string
//         // there is one more mode called object mode that will let us to send the 
//         // data objects in the stream.
//         super({ objectMode: true });
//         this.array = array;
//         this.index = 0;
//     }

//     // implementation of the read function that will tell the stream how to push the data
//     _read() {
//         if (this.index < this.array.length) {
//             const chunk = {
//                 data: this.array[this.index],
//                 index: this.index
//             };
//             // this will mark or emit the event of data to be pushed
//             this.push(chunk);
//             this.index ++;
//         } else {
//             // this will mark as the end of the stream
//             this.push(null);
//         }
//     }
// }

// rough implementation of the stream object as readable stream
// class StreamForObject extends Readable {
    
//     constructor(object) {
//         super({ encoding: 'UTF-8' });
//         this.object = object;
//     }

//     _read() {
//         Object.keys(this.object).map((key) => {
//             this.push(this.object[key]);
//         });
//         this.push(null);
//     }
// }


// const peaks = [
//     'Tallac',
//     'Ralston',
//     'Rubicon',
//     'Twin Peaks',
//     'Castle Peaks',
//     'Rose',
//     'Freel Peak'
// ];

// const peakObject = {
//     "tallac": "Tallac",
//     "ralston": "Ralston",
//     "rubicon": "Rubicon",
//     "twinPeaks": "Twin Peaks"
// };

// const peakStream = new StreamForArray(peaks);
// const peakOjectStream = new StreamForObject(peakObject);

// peakStream.on('data', console.log);
// peakStream.on('end', () => console.log('Done!'));


// peakOjectStream.on('data', console.log);
// peakOjectStream.on('end', () => console.log('Done!'));