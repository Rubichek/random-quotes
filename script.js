const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life',
    author: 'Steve Jobs',
  },
  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: 'I have not failed. I’ve just found 10,000 ways that won’t work',
    author: 'Thomas Edison',
  },
  {
    quote: 'Believe you can and you’re halfway there',
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'Don’t watch the clock; do what it does. Keep going',
    author: 'Sam Levenson',
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
  {
    quote: 'Dream big and dare to fail',
    author: 'Norman Vaughan',
  },
];


const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author: quoteAuthor } = randomQuote; // Дистуктуризация
  // const quote = randomQuote.quote
  // const quoteAuthor = randomQuote.author  
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = quoteAuthor
}

generateBtn.addEventListener("click", generateRandomQuote);
