////////////////////////////////
// constants
const donutCountOutput = document.getElementById("donutCountOutput");
const donutButton = document.getElementById("donutButton");
const resetButton = document.getElementById("resetButton");

const numMultiplierOutput = document.getElementById("numMultiplierOutput");
const multiplierCosting = document.getElementById('multiplierCost');
const purchaseMultiplierButton = document.getElementById("purchaseMultiplierButton");

const numAutoClickerOutput = document.getElementById("numAutoClickerOutput");
const autoClickerCosting = document.getElementById("autoClickerCost");
const purchaseAutoClickerButton = document.getElementById("purchaseAutoClickerButton");

const donutsPerClickOutput = document.getElementById("donutsPerClick");

////////////////////////////////
// event listeners
donutButton.addEventListener("click", function() {
  store.createDonut();
});
purchaseMultiplierButton.addEventListener("click", function(){
  store.purchaseMultiplier();
});
purchaseAutoClickerButton.addEventListener("click", function() {
  store.purchaseAutoClicker();
});
resetButton.addEventListener("click", function() {
  store.reset();
});

////////////////////////////////
// Initialize Game
let store = new DonutStore();
store.reset();

////////////////////////////////
// modal code
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
  }
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  var modal2 = document.getElementById("myModal2");
  var btn2 = document.getElementById("myBtn2");
  var span2 = document.getElementsByClassName("close2")[0];
  btn2.onclick = function() {
      modal2.style.display = "block";
    }
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
  }
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

