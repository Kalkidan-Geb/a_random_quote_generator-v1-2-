/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
***/
// array with quote objects 

const quotes = [
  {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: 'Winston Churchill',
    citation: "Speech to the House of Commons",
    year: 1942
  },

  {quote: "The greatest glory in living lies not in never failing, but in rising every time we fall.",
  source: 'Nelson Mandela',
  citation: "Long Walk to Freedom",
  year: 1994
  },
  {quote: "There is no limit to what we, as women, can accomplish.",
  source: 'Michelle Obama',
  citation: "US Women Summit speech",
  year: 2016
},
{quote: "In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe.",
  source: 'Michael Jackson',
  citation: "Dancing the Dream",
  year: 2001
  },
{quote: "The world is but a canvas to our imagination.",
  source: 'Henry David Thoreau',
  citation: "Walden",
  year: 1854 
}
]


/***
 * `getRandomQuote` function will generate a random number in the given range of the quotes array and returns a random quote
***/
// gets a random number between 0 and 5 
function getRandomQuote(){
  const randomNumber = Math.floor( Math.random() * (quotes.length))
  return quotes[randomNumber]
}

/***
 * `printQuote` function generates 
***/
function printQuote(){
  const randomQuote = getRandomQuote()

// gets the object values 
  let html = `
  <p class="quote">${randomQuote['quote']}</p>
  <p class="source">${randomQuote['source']} `

  if ( randomQuote['citation'] ){
    html += `<span class="citation"> ${randomQuote['citation']} </span>`
  }
  if ( randomQuote['year'] ){
    html += `<span class="year"> ${randomQuote['year']} </span>`
  }
  html += '<p>'
  document.getElementById('quote-box').innerHTML = html;     
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


