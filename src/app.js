/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["el", "la"];
  let adj = ["gran", "inmensa"];
  let noun = ["consola", "pera"];

  for (let i = 0; i < pronoun.lenght; i++) {
    for (let j = 0; j < adj.lenght; i++) {
      for (let j = 0; j < noun.lenght; i++) {
        let unirPalabras = pronoun + adj + ".com");
      }
    }
  }

  let parrafo = document.querySelector("#domain");
  parrafo.textContent = unirPalabras;

  console.log(unirPalabras);
};
