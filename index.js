// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for (const theName of names){
        messages.push(`Thank you, ${theName}, for the wonderful surprise gift!`)
    }
    return messages;
}

function countDown(number) {
    while (number>=0) {
        console.log(number);
        number--;
    }
}

// this works too
/* function countDown(number) {
     for (let i = number; i >= 0; i--) {
         if(number<0) return;
         console.log(i);
    }
 }
*/