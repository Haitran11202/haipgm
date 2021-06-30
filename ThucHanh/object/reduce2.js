Array.prototype.reduce2 = function(callBack,result){
    let index = 0;
    if (arguments.length < 2) {
        result = this[index];
        index = 1;
    }
    for (; index < this.length; index++) {
        result = callBack(result,this[index],index,this);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total,number)=>{
    return total + number;
});
console.log(result);