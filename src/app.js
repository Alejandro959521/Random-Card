/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let numeros = [
  "A",
  "J",
  "Q",
  "K",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
let piezas = ["♦", "♥", "♠", "♣"];
window.onload = function(event) {
  document.querySelector(".center").innerHTML = randomN();
  const c = randomF();

  document.querySelector(".top").innerHTML = c;
  document.querySelector(".bottom").innerHTML = c;

  if (c == "♦" || c == "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
};

let randomN = () => {
  let a = Math.floor(Math.random() * numeros.length);
  return numeros[a];
};

let randomF = () => {
  let b = Math.floor(Math.random() * piezas.length);

  return piezas[b];
};
window.onclick = function() {
  document.querySelector(".center").innerHTML = randomN();
  const c = randomF();

  document.querySelector(".top").innerHTML = c;
  document.querySelector(".bottom").innerHTML = c;

  if (c == "♦" || c == "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
};
