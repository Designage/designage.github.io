var btn1 = document.querySelector("#menu-toogle")
var container1 = document.querySelector("#side-navigation")
var backtop = document.querySelector("#top")
btn1.addEventListener("click", function(){
if(container1.style.display == "block"){
  container1.style.display = "none"
}else{
  container1.style.display = "block"
}
})

function myFunction(x) {
if (x.matches) { 
container1.style.display = "none"
} 
else{
  container1.style.display = "none"
}
}

var x = window.matchMedia("(min-width: 970px)")
myFunction(x)
x.addListener(myFunction)

window.addEventListener("scroll", () => {
    
  const scrollValue = window.scrollY;
  if (scrollY > 420) {
    backtop.style.display = "block";
  } else {
    backtop.style.display = "none";
  }

  
});