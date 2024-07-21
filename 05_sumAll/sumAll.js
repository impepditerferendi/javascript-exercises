const sumAll = function(num1, num2) {
    let sum = 0;

    if(num1 > num2 ){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }else if(num2 < 0|| num1 < 0){
        return 'ERROR';
    }else if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }

    for(let i = num1; i <= num2; i++){
        sum+=i;
    }
    
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
