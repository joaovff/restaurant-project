// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("restaurant-project JS imported successfully!");
});

function startMap() {
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
}

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

startMap();

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
