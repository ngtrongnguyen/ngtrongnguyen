
// function writeLog() {
   
//     for (var param of arguments) {
       
//     }  console.log(param) 
// }
    

// writeLog('log1', 'log 2', 'log3' )  


// function writelog(prefix, message){
//     console.log(prefix + ': ' + message);
// }
// writelog("Dog", " là con chó")


// OBJECT
var dogName = {
    puppy:  ' cho co',
    bigDog: 'cho me',
    superD: 'big  bull',
    getName: function() {
        return this.superD; 
    }
}

// delete dogName.puppy;
// dogName[ 'cho---=Japan ' ] = 'chihua';

console.log (dogName.getName())

// object contructor

function  user(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    
    this.getName = function()   {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new user('nguyen', 'trong', 'nguyen');
var user = new user('son', 'ngoc', 'dang');

  author.title = 'xin chao tat ca'

console.log(author.title);
console.log(user);



function custumer(name, age, job)  {
    this.name = name;
    this.age = age;
    this.job = job;


}

var lisa = new custumer('elizabel','20','bank');
var thor  = new custumer('chris','100','god of thunder')

lisa.className = 'puppy'
console.log(lisa)

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() ;
var month  = month ++;
console.log(month);



// TOAN TU 3 NGOI
// var result = course.coins > 0 ? `${course.coins} coins` : `mien phi`

// console.log(result)

// for loop

// for (var key in course) {
//     console.log(course[key])
// }

// BREAK AND CONTINUE //
// for (var i = 0; i < 10; i ++ ) {
//     if (2*i == 0 ) {
//         continue
//     }
//     console.log(i/2+1);
// }
// console.error('vong lap trong vong lap')

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for (var i = 0; i < myArray.length; i ++) {
//     for (var j = 0 ;j < myArray[i].length; j++) {
//         console.log(myArray[i][j])
//     }
// }


// for(var i = 10; i> 0;  i --) {
//     console.log(i)
// }



var courses = [
    {
        ten : 'java',
        members : '40',
        coin : 250
    },
    {
        ten : 'c#',
        members: ' 30',
        coin : 90
    }
]

// var course = courses.find(function(course, Shadow) {
//     return course.members === '40';
// });

// console.log(course)
// ARRAY MAP METHOD
// function courseHandler(courses) {
//     return {
//         ten: `ten khoa hoc la:  ${courses.ten} ` ,
//         members: courses.members,
//         coins: `${courses.coins}`
        
//     }
        
// }
// var newCourse = courses.map(courseHandler) 
// console.log(newCourse)

var totalCoin = 0;

for (var course of courses) {
    totalCoin += course.coin;

}   
console.log(totalCoin);

var nguyen12  = document.querySelector('h1');

console.log(nguyen12)


// login-register

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});


