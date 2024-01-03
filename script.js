//assigning variable with html tags

var btn = document.querySelector("button");
var images = document.querySelectorAll("img");

var check = 0;



// There are two methods, You can try other one by removing the comments ' /*   */ '

//                1)   using for of loop


btn.addEventListener("click",function() {
  if (check === 0) {
    btn.innerHTML = "Gray: Turn OFF";

      for (let img of images) {
        img.style.webkitFilter = "grayscale(100%)";
      }
      check++; //or check=1; if we know this statement wil work only once
    } else {
      btn.innerHTML = "Gray: Turn ON";
      for (let img of images) {
        img.style.webkitFilter = "grayscale(0%)";
      }
      check--; // check=0; don't forget to make it 0 so that next time the if statement executes
    }
  }
);



//ends here







//                2)using forEach looop

//forEach loop does the same thing that "for of" loop did↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

/*

btn.addEventListener("click", () => {
  if (check === 0) {
    btn.innerHTML = "Gray: Turn OFF";
    images.forEach((img) => {
      img.style.webkitFilter = "grayscale(0%)";
      check++;
    });
  } else {
    btn.innerHTML = "Gray: Turn ON";
    images.forEach((img) => {
      img.style.webkitFilter = "grayscale(100%)";
      check--;
    });
  }
});

*/

//ends here







// using same forEach loop but thiss time instead of creating the function inside the loop we created the function outside the loop and called it;

// calling  function from outside of the loop and use it in the loop starts from here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
/*

btn.addEventListener("click", () => {
  if (check === 0) {
    btn.innerHTML = "Gray: Turn OFF";
    images.forEach(turnOn);
  } else {
    btn.innerHTML = "Gray: Turn ON";
    images.forEach(turnOff);
  }
});
// creating function 

function turnOn(img) {
  img.style.webkitFilter = "grayscale(100%)";
  check++;
}
function turnOff(img) {
  img.style.webkitFilter = "grayscale(0%)";
  check--;
}

//ends here

*/






// to remove grayscale on hover
images.forEach((img) => {
  img.addEventListener("mouseenter", function () {
    if (check>0) {
      img.style.webkitFilter = "grayscale(0%)";
    }
  });

  img.addEventListener("mouseleave", function () {
    if (check>0) {
      img.style.webkitFilter = "grayscale(100%)";
    }
  });
});



  //--------------------------------{Happy codding}--------------------------------------//                  