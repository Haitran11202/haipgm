var courses =[
    {
        name: 'Javascript',
        coin: 250
    },
    {
        name: 'PHP',
        coin: 20
    },
    {
        name: 'HTML, CSS',
        coin: 250
    },
];
Array.prototype.filter2 = function(callBack){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callBack(this[index],index,this)
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}
function filterDemo(course) {
    return course.coin > 200;
}
var filterCourses = courses.filter2(filterDemo);
