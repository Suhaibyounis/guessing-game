'use strict'

// let myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no');

// while (myFavTeam.toLowerCase() != 'yes' && myFavTeam.toLowerCase() != 'no') {
//     myFavTeam = prompt('Do you think Barcelona is my favourite team?', 'yes or no')



alert('Welcome to My Personal Website.')

let firstName = prompt('whats your name?');
alert('Our Greeting ' + firstName.toLowerCase())

let firstWork = prompt('do you think my first work in Jordan?' , 'yes or no')

while (firstWork.toLowerCase() != 'yes' && firstWork.toLowerCase() != 'no') {
    firstWork= prompt('My First Work in Jordan?', 'yes or no')
}


if (firstWork.toLowerCase() == "yes")
{
    console.log ("My First Work in Jordan")
    alert('You are right, My First Work in Jordan')
} else{
    console.log ("You are wrong, because my First Work in Jordan")
    alert('You are wrong, because my First Work in Jordan')
}

let firstSalary = prompt('My First Salary in Jordan is 500JD?' , 'yes or no')

if (firstSalary.toLowerCase() == "yes" )
{
    console.log ("My First Salary in Jordan is 500JD")
    alert('You are right, My First Salary in Jordan is 500JD')
} else{
    console.log ("You are wrong, because my First Salary in Jordan is 500JD")
    alert('You are wrong, because my First Salary in Jordan is 500JD')
}

let educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no')

if (educationCertificate.toLowerCase() == "yes")
{
    console.log ("My Education Certificate is Bachelor Degree")
    alert('You are right, My Education Certificate is Bachelor Degree')
} else{
    console.log ("You are wrong, because My Education Certificate is Bachelor Degree")
    alert('You are wrong, because My Education Certificate is Bachelor Degree')
}

let myHomeTown = prompt('My Home Town is Irbid?' , 'yes or no') 

if (myHomeTown.toLowerCase() == "yes")
{
    console.log ("My HomeTown is Irbid")
    alert('You are right, My Home Town is Irbid')
} else {
    console.log ("You are wrong, because My Home Town is Irbid")
    alert('You are wrong, because My Home Town is Irbid')
}

let travelOutsideJordan = prompt('do you think that I traveled outside Jordan?' , 'yes or no') 

if (travelOutsideJordan.toLowerCase() == "yes")
{
    console.log ("You are right, I worked in Saudi Arabia")
    alert('You are right,  I worked in Saudi Arabia')
} else{
    console.log ("You are wrong, because I worked in Saudi Arabia")
    alert('You are wrong, because  I worked in Saudi Arabia')
}

alert('Welcome ' + firstName + ' to my website');