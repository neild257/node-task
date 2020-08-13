const { createServer } = require('http');
// stat follows callback so that we can make it promise by using promisfy
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');

const fileInfo = promisify(stat);

const videoFile = './powder-day.mp4';

createServer(async (req, res) => {
    const { size } = await fileInfo(videoFile);
    /**
     * Handling the range request. As it might be possible that some browsers do a 
     * range request instead of full request.
     * First we take the range and then check whether it is present or not 
     * and if it present then it will be in the form of bytes = 0-{bytes}.
     */
    const range = req.headers.range;
    
    res.writeHead(200, { 
        'Content-Length': size,
        'Content-Type': 'video/mp4'
    });
    createReadStream(videoFile).pipe(res);

}).listen(3000, () => {
    console.log('Server has started on 3000');
});