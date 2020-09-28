/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Array of object with random quotes 
***/

const quotes = [
  {
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
    source: `Steve Jobs`,
    citation: `Stanford`,
    year: 2005
  },
  {
    quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier.`,
    source: `Mother Teresa`
  },
  {
    quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
    source: `Nelson Mandela`
  },
  {
    quote: `Only a life lived for others is a life worthwhile.`,
    source: `Albert Einstein`
  },
  {
    quote: `The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.`,
    source: `Barack Obama`
  },
  {
    quote: `Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.`,
    source: `Jim Rohn`
  },
  {
    quote: `You miss 100% of the shots you don't take.`,
    source: `Wayne Gretzky`
  },
  {
    quote: `Whether you think you can or you think you can't, you're right.`,
    source: `Henry Ford`
  },
  {
    quote: `Be yourself; everyone else is already taken.`,
    source: `Oscar Wilde`,
    tags: 'honesty, inspirational'
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    source: `Albert Einstein`
  },
  {
    quote: `So many books, so little time.`,
    source: `Frank Zappa`
  },
  {
    quote: `A room without books is like a body without a soul.`,
    source: `Marcus Tullius Cicero`
  },
  {
    quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    source: `Dr. Seuss`
  }
];

// console.log(quotes);

/***
 * `getRandomQuote` function
 * Generate a random number and return a random quote from 'quote' array
 * @returns {object}: returns an array object with random quote and quote source.
***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length); // generating a random value with array's length as upper limit for the value.

  return quotes[random]; // return a quote object from quotes array with the above generated value as index of object.
}

/***
 * `getRandomColor` function
 * Generate a random color and change the background color of document with it.
 * @returns {string}: returns a string with a random rgb color appended to document 
***/

function getRandomColor() {
  let container = document.getElementById("container"); // select a element from markup with id=container

  let random = () => Math.floor(Math.random() * 256); // generating a random value upper limit of 255

  let randomColor = `rgb(${random()}, ${random()}, ${random()})`

  return container.style.backgroundColor = randomColor; // return a quote object from quotes array with the above generated value as index of object.
}


/***
 * `autoRefresh` function
 * refresh the page automatically to show new quote
 * @returns {number}: executes the printQuote() and getRandomColor() function after every 10secs
***/

function autoRefresh() {
  let refresh = setInterval(function () { printQuote(), getRandomColor() }, 10000); // execute printQuote() function automatically after every 10secs.
}

autoRefresh(); // executing autoRefresh function to refresh the quotes automatically after every 10 secs

// console.log(getRandomQuote());


/***
 * `printQuote` function
 * Initialize 3 variables; first variable to hold value of getting #quote-box from html file. 
 * Second variable calls getRandomQuote() function and holds it's return value. Third
 * variable generates a html string.
 * @returns {string}: returns a string in #quote-box.
***/

function printQuote() {
  let quoteBox = document.getElementById('quote-box'); // getting #quote-box from document

  let randomQuote = getRandomQuote(); // executing getRandomQuote() function and holding it's return value

  let quoteHtml = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`; // HTML for quote & quote source

  if (randomQuote.citation) {
    quoteHtml += `<span class="citation">${randomQuote.citation}</span>`
  } // check for citation key in randomQuote array and add extra markup if available

  if (randomQuote.year) {
    quoteHtml += `<span class="year">${randomQuote.year}</span>`
  } // check for year key in randomQuote array and add extra markup if available

  if (randomQuote.tags) {
    quoteHtml += `<span class="year">${randomQuote.tags}</span>`
  } // check for tags key in randomQuote array and add extra markup if available

  quoteHtml += `</p>` // add markup to properly close all open markup tags

  return quoteBox.innerHTML = quoteHtml; //appending the quote array values in #quote-box 
}

// console.log(printQuote());


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); // event listener for button to call and execute printQuote() function to generate new quote
document.getElementById('load-quote').addEventListener("click", getRandomColor, false); // event listener for button to call and execute getRandomColor() function to generate new background color
