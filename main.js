// //npm install linereader to be able to access lineno variable? (linenumber)
// var fs = require('fs');

// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('mbox.full')
// });

// var headerArray = [];
// var bodyArray = [];//this array will represent one email message body


// lineReader.on('line', function (line) {
//     console.log('Line from file:', line);
//     if (line.charAt(0) === "F" && line.charAt(1) === "r" && line.charAt(2) === "o" && line.charAt(3) === "m" && line.charAt(4) === ":") {
//         console.log("*************************************************************************");
//         console.log("******************this line starts with 'From:'***************************");
//         console.log("*************************************************************************");
//         //now let's add this line as a supposed start to a header! so we'll add it to the temp header array
//         headerArray.push(line);
//     }
// });

// lineReader.on('line', function (lineno, line) {
//     console.log("line number: " + lineno);
// })

var LineReader = require('linereader');
var lr = new LineReader('./mbox.full');


// var lr = new LineReader('./linereader.js', {skipEmptyLines: true});
// var lr = new LineReader('https://github.com/');
// var lr = new LineReader('https://raw.githubusercontent.com/nswbmw/N-blog/master/public/images/lufei.jpg', {encoding: "base64"});
// var lr = new LineReader('HTTP://www.hot3c.com', {encoding: 'Big5'});

lr.on('error', function (err) {
    console.log(err);
    lr.close();
});

lr.on('line', function (lineno, line) {
    // if (lineno <= 100) {
    //     console.log("lineno: " + lineno);
    //     console.log(lineno + "   " + line);
    // } else {
    //     lr.close();
    // }
    // lr.pause();
    // setTimeout(function () {
    //     lr.resume();
    // }, 1);
    console.log("this is a line: " + line);
    if (line.charAt(0) === "F" && line.charAt(1) === "r" && line.charAt(2) === "o" && line.charAt(3) === "m") {
        //         console.log("*************************************************************************");
        //         console.log("******************this line starts with 'From:'***************************");
        //         console.log("*************************************************************************");
        //         //now let's add this line as a supposed start to a header! so we'll add it to the temp header array
        // headerArray[lineno] = line;
        headerArray.push(line);
        headerArray.push(lineno);//just gonna push both line and line no for now so i can kinda keep track of the line i was at in the original file
        //     in case i realize this isn't a true header, shaky
    }
    // (headerArray[lineno - 1])
    else if (line.charAt(0) === "F" && line.charAt(1) === "r" && line.charAt(2) === "o" && line.charAt(3) === "m" && line.charAt(4) === ":")
});

lr.on('end', function () {
    console.log("End of file");
});

// var logger = fs.createWriteStream('new.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
// });

// logger.write('some data\n') // append string to your file
// logger.write('more data\n') // again
// logger.write('and more\n') // again

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