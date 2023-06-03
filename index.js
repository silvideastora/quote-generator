
const sharp = require("sharp");
const apiURL = "https://zenquotes.io/api/random";
const fetch = require("node-fetch");


async function getRandomQuote(apiURLInput) {
  //Mi frase es:
  let quoteText;
  //El nombre del autor
  let quoteAuthor;
  //Valida la response de la api
  const response = await fetch(apiURLInput)
  var quoteData = await response.json()
  //Actualiza los valores que obtenemos del json y los pinta
  quoteText = quoteData[0].q;
  quoteAuthor = quoteData[0].a
  
  //Contruccion de imágen
  const width = 750;
  const height = 483;
  const text = quoteText
  const words = text.split("")
  const lineBreak = 4;
  let newText = "";

  //Define algunos tspan con 4 palabras
  let tspanElements = "";
}

getRandomQuote(apiURL)