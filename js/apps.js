'use strict';

let score = 0;
alert('Welcome to My Personal Website.');

let firstName = prompt('whats your name?');
alert('Our Greeting ' + firstName);


function firstWorkFun(){
  let firstWork = prompt( 'do you think my first work in Jordan? , yes or no' );
  while(!( firstWork.toLowerCase() == 'yes' || firstWork.toLowerCase() == 'y' || firstWork.toLowerCase() == 'no' || firstWork.toLowerCase() == 'n' ) ){
    firstWork = prompt( 'do you think my first work in Jordan? , yes or no' );
  }
  if ( firstWork.toLowerCase() == 'yes' || firstWork.toLowerCase() == 'y' )
  {
    
    alert( 'You are right, My First Work in Jordan' );
    score++ ;
  } else if ( firstWork.toLowerCase() == 'no' || firstWork.toLowerCase() == 'n' ) {
    
    alert( 'You are wrong, because my First Work in Jordan' );
  } else {
    firstWork = prompt( 'do you think my first work in Jordan?' , 'yes or no' );
  }
}

function firstSalaryFun(){
  let firstSalary = prompt('My First Salary in Jordan is 500JD?' , 'yes or no');
  while(!(firstSalary.toLowerCase() == 'yes' || firstSalary.toLowerCase() == 'y' || firstSalary.toLowerCase() == 'no' || firstSalary.toLowerCase() == 'n')){
  firstSalary = prompt('My First Salary in Jordan is 500JD?' , 'yes or no');
  }
  if (firstSalary.toLowerCase() == 'yes' || firstSalary.toLowerCase() == 'y' )
  {
    alert('You are right, My First Salary in Jordan is 500JD');
    score++;
    
  } else if (firstSalary.toLowerCase() == 'no' || firstSalary.toLowerCase() == 'n' ){
    alert('You are wrong, because my First Salary in Jordan is 500JD');
    
  } else {
    firstSalary = prompt('My First Salary in Jordan is 500JD?' , 'yes or no');
  }

}


function educationCertificateFun(){
  let educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no');
  while(!(educationCertificate.toLowerCase() == 'yes' || educationCertificate.toLowerCase() == 'y' || educationCertificate.toLowerCase() == 'no' || educationCertificate.toLowerCase() == 'n')){
    educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no');
  }
  
  if (educationCertificate.toLowerCase() == 'yes' || educationCertificate.toLowerCase() == 'y' )
  {
    alert('You are right, My Education Certificate is Bachelor Degree');
    score++ ;
    
  } else if (educationCertificate.toLowerCase() == 'no' || educationCertificate.toLowerCase() == 'n' ) {
    alert('You are wrong, because My Education Certificate is Bachelor Degree');
    
  } else {
    educationCertificate = prompt('My Education Certificate is Bachelor Degree?' , 'yes or no');
  }
}


function myHomeTownFun(){
  let myHomeTown = prompt('My Home Town is Irbid?' , 'yes or no');
  while(!(myHomeTown.toLowerCase() == 'yes' || myHomeTown.toLowerCase() == 'y' || myHomeTown.toLowerCase() == 'no' || myHomeTown.toLowerCase() == 'n')){
    myHomeTown = prompt('My Home Town is Irbid?' , 'yes or no');
  }
  
  if (myHomeTown.toLowerCase() == 'yes' || myHomeTown.toLowerCase() == 'y')
  {
    alert('You are right, My Home Town is Irbid');
    score++ ;
    
  } else if (myHomeTown.toLowerCase() == 'no' || myHomeTown.toLowerCase() == 'n'){
    alert('You are wrong, because My Home Town is Irbid');
    
  } else {
    myHomeTown = prompt('My Home Town is Irbid?' , 'yes or no');
  }
}


function travelOutsideJordanFun(){
  let travelOutsideJordan = prompt('do you think that I traveled outside Jordan?' , 'yes or no');
  while(!(travelOutsideJordan.toLowerCase() == 'yes' || travelOutsideJordan.toLowerCase() == 'y' || travelOutsideJordan.toLowerCase() == 'no' || travelOutsideJordan.toLowerCase() == 'n')){
    travelOutsideJordan = prompt('do you think that I traveled outside Jordan?' , 'yes or no');
  }
  
  if (travelOutsideJordan.toLowerCase() == 'yes' || travelOutsideJordan.toLowerCase() == 'y')
  {
    alert('You are right,  I worked in Saudi Arabia');
    score++ ;
    
  } else if (travelOutsideJordan.toLowerCase() == 'no' || travelOutsideJordan.toLowerCase() == 'n') {
    alert('You are wrong, because  I worked in Saudi Arabia');
    
  } else {
    travelOutsideJordan = prompt('do you think that I traveled outside Jordan?' , 'yes or no');
  }
}


function fiveInOne(num){
  let Qarr = [firstWorkFun(), firstSalaryFun(), educationCertificateFun(), myHomeTownFun(), travelOutsideJordanFun()];
  Qarr[num];
}
fiveInOne();




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







