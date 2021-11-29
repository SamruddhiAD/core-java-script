/** 
  * validateForm() :  this function will validate the user input data from index.html
  * store() : this function will store the validated user data to Local Storage
  * @author Samruddhi Deshpande sd9335@rit.edu
*/

function validateForm() {
    if( document.myForm.name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.name.focus() ;
        return false;
     }
     if( document.myForm.mail.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.mail.focus() ;
        return false;
     }
     return( true );
  }

  function store(){
    var inputName= document.getElementById("name");
    localStorage.setItem("name", inputName.value);
    var inputEmail= document.getElementById("mail");
    localStorage.setItem("mail", inputEmail.value);
   }

var animate, left=0, imgObj=null;

function init(){

   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative';
   imgObj.style.top = '0px';
   imgObj.style.left = '-300px';
   imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}