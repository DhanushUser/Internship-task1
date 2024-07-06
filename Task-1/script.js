var x = document.querySelector("list");


function alertFunc(){
    window.alert("Submitted");
}


function myFunction() {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }