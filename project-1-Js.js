// let a ; 
// let b ; 
// let c ; 











// function showDiv() {
//     var oldDiv = document.querySelector('.container');
//     var newDiv = document.querySelector('#new-div');
    


//     a = document.getElementById("aTextBox").value;
//     a = Number(a)


//     b = document.getElementById("bTextBox").value;
//     b = Number(b)


//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));


//     document.getElementById("result").innerHTML = "Side C = ", c ;





//     oldDiv.style.display = 'none';
//     newDiv.style.display = 'block';
//   }




let a;
let b;
let c;

function showDiv() {
  var oldDiv = document.querySelector('.container');
  var newDiv = document.querySelector('#new-div');

  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("result").innerHTML = "Side C = " + c;

  oldDiv.style.display = 'none';
  newDiv.style.display = 'block';
}