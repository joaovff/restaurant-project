/* function startMap() {
  const ironhackBCN = {
    lat: 38.711798333387264,
    lng: -9.124110649886294,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackBCN,
  });
  const myMarker = new google.maps.Marker({
    position: {
      lat: 38.711798333387264,
      lng: -9.124110649886294,
    },
    map: map,
    title: "I'm here",
  });
} */

function toggleFAB(fab) {
  if (document.querySelector(fab).classList.contains("show")) {
    document.querySelector(fab).classList.remove("show");
  } else {
    document.querySelector(fab).classList.add("show");
  }
}

document.querySelector(".fab .main").addEventListener("click", function () {
  toggleFAB(".fab");
});

document.querySelectorAll(".fab ul li button").forEach((item) => {
  item.addEventListener("click", function () {
    toggleFAB(".fab");
  });
});

//startMap();

function show() {
  document.getElementById("show").style.display = "block";
}

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const QRCode = () => {
  const userInput = document.getElementById("link").value;
  const GoogleChartAPI =
    "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=";
  const QRcontent = GoogleChartAPI + encodeURIComponent(userInput);
  document.querySelector("#QRCodeImage").src = QRcontent;
};

function sentReview() {
  document.getElementById("form-stars").style.display = "none";
  document.getElementById("sent-review").style.display = "flex";
}

const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);