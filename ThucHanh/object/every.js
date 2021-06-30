var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    }
];
Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var resutl = callback(this[index],index,this);
            if(!resutl){
                output = false;
                break;
            }
        }
    }
    return output;
}

var resutl = courses.every2(function(course){
    return course.coin > 500;
});
console.log(resutl);
