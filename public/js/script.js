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
