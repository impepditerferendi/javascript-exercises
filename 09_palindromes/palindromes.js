const palindromes = function (word) {
    word = word.replace(/[^a-z0-9]+/gi, "");
    word = word.toUpperCase();
    let high = word.length-1;
    let low = 0;
    for(let i = 0; i < word.length; i++){
    if(low >= high){
        return true;
    }else if(word.charAt(low) != word.charAt(high)){
        return false;
    }else{
        low++;
        high--;
    }
}
};


//npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
