var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];
Array.prototype.some2 = function(callback) {
    var output = false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                output = true;
            }
        }
    }
    return output;
}
var result = courses.some2(function (course) {
    return course.isFinish;
});
console.log(result);