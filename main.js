var fs = require('fs');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('mbox.full')
});

var bodyArray = [];//this array will represent one email message body

lineReader.on('line', function (line) {
    console.log('Line from file:', line);
    console.log(line.charAt(0));
});


var logger = fs.createWriteStream('new.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
});

logger.write('some data\n') // append string to your file
logger.write('more data\n') // again
logger.write('and more\n') // again

// fs.readFile('mbox.full', function (err, data) {
//     if (err) {
//         console.log("extreme error!");
//         throw err;
//     }

//     // Convert file to a string object

//     var unParsed = data.toString();

//     // Split the text into an array of strings where each
//     // element is a message

//     // var indivMessages = unParsed.split("From -");
//     // console.log(indivMessages.length);

//     console.log(unParsed);




//     // console.log(data); returns -->  <Buffer 46 72 6f 6d 20 6e 6f 62 6f 64 79 20 4d 6f 6e 20 53 65 70 20 31 37 20 30 30 3a 30 30 3a 30 30 20 32 30 30 31 0a 46 72 6f 6d 3a 20 41 20 28 7a 7a 7a 29 ... >

// });

// fs.writeFile('new.txt', "hi", (err) => {
//     // In case of a error throw err. 
//     if (err) {
//         console.log("extreme error!");
//         throw err;
//     }

// });

// fs.appendFile('new.txt', 'new data', function (err) {
//     if (err) {
//         // append failed
//     } else {
//         // done
//         console.log("hello world!");
//     }
// });