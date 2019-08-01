var fs = require('fs');


var headerArray = [];
var bodyArray = [];//this array will represent one email message body
//perhaps I want to have some booleans to keep track of if the previous line was 'From', or the previous line was 'From:' or 'Date:'
//so in each on line if statement i can have more accurate checks and catch more errors



var LineReader = require('linereader');
var lr = new LineReader('./mbox.full');


lr.on('error', function (err) {
    console.log(err);
    lr.close();
});

lr.on('line', function (lineno, line) {

    console.log("this is a line: " + line);

    //should be a switch and should probably use substring
    if (line.charAt(0) === "F" && line.charAt(1) === "r" && line.charAt(2) === "o" && line.charAt(3) === "m") {
        var fromBool = true;//see line 10 and 11 essentially this means if we hit 'From:' 
        //         console.log("*************************************************************************");
        //         console.log("******************this line starts with 'From:'***************************");
        //         console.log("*************************************************************************");
        //         //now let's add this line as a supposed start to a header! so we'll add it to the temp header array
        headerArray.push(line);
        headerArray.push(lineno);//just gonna push both line and line no for now so i can kinda keep track of the line i was at in the original file
        //     in case i realize this isn't a true header, shaky
    }

    if (line.charAt(0) === "F" && line.charAt(1) === "r" && line.charAt(2) === "o" && line.charAt(3) === "m" && line.charAt(4) === ":") {
        if (headerArray[1] === lineno - 1) {
            //this means the previously pushed line into the header array started with 'From', aka correct formatting for a header, except it assumes the
            //from text only takes up one line.. unfortunately given the amount of time i have left i'll have to not account for that.
        }
    }
    if (line.charAt(0) === "D" && line.charAt(1) === "a" && line.charAt(2) === "t" && line.charAt(3) === "e" && line.charAt(4) === ":") {

    }
    if (line.charAt(0) === "S" && line.charAt(1) === "u" && line.charAt(2) === "b" && line.charAt(3) === "j" && line.charAt(4) === "e" && line.charAt(5) === "c" && line.charAt(6) === "t" && line.charAt(7) === ":") {

    }
    //the essence of what I would want to accomplish with the above if statements is pushing and popping inside a short array, and with that deciding if I'm looking at a email header
    //then once I encounter the next line with substance i'll start pushing onto the bodyArray until i find another header. there's a lot of code to write here, but I think 
    //if i had more time (and I'll surely work more on this in my free time!) I think it could be done with "hard code" like I have here. but likely better planning would
    //save me time and make the code much cleaner. Not sure if submitting a javascript file as incomplete as this is a good idea, but I figured since I did spend some time
    //working on it and thinking about it I'd just submit what I have!
});

lr.on('end', function () {
    console.log("End of file");
    lr.close();
});


//the (below) write code I would incorporate inside of the read code.. todo!

// var logger = fs.createWriteStream('new.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
// });

// logger.write('some data\n') // append string to your file
// logger.write('more data\n') // again
// logger.write('and more\n') // again

// fs.writeFile('new.txt', "hi", (err) => {
//     // In case of a error throw err. 
//     if (err) {
//         console.log("extreme error!");
//         throw err;
//     }

// fs.appendFile('new.txt', 'new data', function (err) {
//     if (err) {
//         // append failed
//     } else {
//         // done
//         console.log("hello world!");
//     }
// });

//ctl c to cancel nonstop running of program (whoops...)