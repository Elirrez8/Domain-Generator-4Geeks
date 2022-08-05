/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let exten = [".net", ".com", ".us", ".io"];

  let concatenar = [pronoun, adj, noun, exten];

  console.log("Arreglos sin constuir aun: " + JSON.stringify(concatenar));
  concatenar = concatenar.map(arreglo => {
    let num = Math.floor(Math.random() * arreglo.length);
    console.log(num);
    return arreglo[num];
  });
  console.log(
    "Elementos aleatorios por arreglo: " + JSON.stringify(concatenar)
  );
  let domains = concatenar.join(""); // join es un metodo para imprimir la excusa con espacio entre sus arreglos
  let domainDOM = document.getElementById("domains");
  domainDOM.innerHTML = domains;

  //do a loop here
};
window.addEventListener("DOMContentLoaded", window.onload);
