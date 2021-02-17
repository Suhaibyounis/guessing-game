'use strict'

let score = 0;
alert('Welcome to My Personal Website.');

let firstName = prompt('whats your name?');
alert('Our Greeting ' + firstName);

let firstWork = prompt('do you think my first work in Jordan?' , 'yes or no');

while (firstWork.toLowerCase() !== 'yes' && firstWork.toLowerCase() !== 'y' && firstWork.toLowerCase() !== 'no'  && firstWork.toLowerCase() !== 'n') {
    firstWork= prompt('My First Work in Jordan?', 'yes or no');
}


if (firstWork.toLowerCase() == "yes" || firstWork.toLowerCase() == "y" )
{
    console.log ("My First Work in Jordan");
    alert('You are right, My First Work in Jordan');
    score++ ;

} else{
    console.log ("You are wrong, because my First Work in Jordan");
    alert('You are wrong, because my First Work in Jordan');
}

let firstSalary = prompt('My First Salary in Jordan is 500JD?' , 'yes or no');

while (firstSalary.toLowerCase() !== 'yes' && firstSalary.toLowerCase() !== 'y' && firstSalary.toLowerCase() !== 'no'  && firstSalary.toLowerCase() !== 'n') {
    firstSalary= prompt('My First Salary in Jordan is 500JD?', 'yes or no')
}

if (firstSalary.toLowerCase() == "yes" || firstSalary.toLowerCase() == "y" )
{
    console.log ("My First Salary in Jordan is 500JD");
    alert('You are right, My First Salary in Jordan is 500JD');
    score++ ;
} else{
    console.log ("You are wrong, because my First Salary in Jordan is 500JD");
    alert('You are wrong, because my First Salary in Jordan is 500JD');
}

let educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no')

while (educationCertificate.toLowerCase() !== 'yes' && educationCertificate.toLowerCase() !== 'y' && educationCertificate.toLowerCase() !== 'no'  && educationCertificate.toLowerCase() !== 'n') {
    educationCertificate= prompt('My Education Certificate is Bachelor Degree?', 'yes or no')
}

if (educationCertificate.toLowerCase() == "yes" || educationCertificate.toLowerCase() == "y" )
{
    console.log ("My Education Certificate is Bachelor Degree");
    alert('You are right, My Education Certificate is Bachelor Degree');
    score++ ;
} else{
    console.log ("You are wrong, because My Education Certificate is Bachelor Degree");
    alert('You are wrong, because My Education Certificate is Bachelor Degree');
}

let myHomeTown = prompt('My Home Town is Irbid?' , 'yes or no') 

while (myHomeTown.toLowerCase() !== 'yes' && myHomeTown.toLowerCase() !== 'y' && myHomeTown.toLowerCase() !== 'no'  && myHomeTown.toLowerCase() !== 'n') {
    myHomeTown= prompt('My Home Town is Irbid?', 'yes or no');
}

if (myHomeTown.toLowerCase() == "yes" || myHomeTown.toLowerCase() == "y")
{
    console.log ("My HomeTown is Irbid");
    alert('You are right, My Home Town is Irbid');
    score++ ;
} else {
    console.log ("You are wrong, because My Home Town is Irbid");
    alert('You are wrong, because My Home Town is Irbid');
}

let travelOutsideJordan = prompt('do you think that I traveled outside Jordan?' , 'yes or no') 

while (travelOutsideJordan.toLowerCase() !== 'yes' && travelOutsideJordan.toLowerCase() !== 'y' && travelOutsideJordan.toLowerCase() !== 'no'  && travelOutsideJordan.toLowerCase() !== 'n') {
    travelOutsideJordan= prompt('do you think that I traveled outside Jordan?', 'yes or no')
}


if (travelOutsideJordan.toLowerCase() == "yes" || travelOutsideJordan.toLowerCase() == "y")
{
    console.log ("You are right, I worked in Saudi Arabia");
    alert('You are right,  I worked in Saudi Arabia');
    score++ ;
} else{
    console.log ("You are wrong, because I worked in Saudi Arabia");
    alert('You are wrong, because  I worked in Saudi Arabia');
}

alert('Welcome ' + firstName + ' to my website');



let num= prompt('Guess the Year of Birthday? and please put numbers only?' ) ;

for ( let i=0 ; i < 3 ; i++)
if (num === '89') { 
   
    alert ('The Year of Birthday is 89') ;
    score++ ;
    break ;
} else {
    if (num < 89 ){
    alert ('Too High');
    num = prompt('Guess the Year of Birthday?');
    } else {
    if (num > 89 ){
    alert ('Too Low');
    num= prompt('Guess the Year of Birthday?');

    }
    }
}



let array = [ '20' , '25' , '30' , '35' , '40', '45' , '50'];
alert ('the number stored in the array is ' + array);

let arr = prompt('Whats the number stored in the array?');

for ( let i = 0 ; i < 5 ; i++ )
if ( arr === array[2] ){
    alert (' you are right, and the number is 30');
    score++ ; 
    break;
} else {
    arr = prompt('Whats the number stored in the' + array +'?');

}

alert ('your score is ' + score + ' out of 7');







