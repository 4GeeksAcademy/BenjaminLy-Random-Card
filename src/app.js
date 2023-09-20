/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();
};

const generateCard = () => {
  const numberTag = document.getElementsByClassName("number")[0];
  const topSuitTag = document.querySelector(".top-suit");
  const bottomSuitTag = document.querySelector(".bottom-suit");
  const suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  numberTag.innerHTML = randomValue;
  topSuitTag.innerHTML = randomSuit;
  bottomSuitTag.innerHTML = randomSuit;

  if (randomSuit == "&hearts;" || randomSuit == "&diams;") {
    topSuitTag.style.color = "red";
    bottomSuitTag.style.color = "red";
  } else {
    topSuitTag.style.color = "black";
    bottomSuitTag.style.color = "black";
  }
};
