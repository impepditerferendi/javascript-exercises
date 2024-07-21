const repeatString = function(string, num) {
    let word = '';
    for(let i = 0; i < num; i++){
        word+=string;
    }
    if(num < 0){
        word = 'ERROR';
    }
    return word;
};



// Do not edit below this line
module.exports = repeatString;
