# FileParser
a very incomplete attempt at reversing the email bodies in an mxbox file, but I figured I would submit what I have to show an attempt and my line of thinking!


log:

my current plan is to essentially pinpoint the body of the email, then I'll add each line as an element to an array and then use .reverse method

currently pushing and popping a headerArray and using if statements to (questionably) decide if I am looking at an email header
once I confirmed (somewhere down the line of nested if statements) that I was looking at a header, I'd start pushing to bodyArray until I encountered the footer, then I'd call the array.reverse method and write that array line by line to the new file (after writing the header).

very incomplete! But I figured a submission would be more appreciated than no submission, and heck, a 1 in a thousand shot at 500 dollars worth of amazon goodies is better than a zero percent chance!