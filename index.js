import quotes from "./src/quotes.js";
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author: quoteAuthor } = randomQuote; // Дистуктуризация
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);
  toggleFavoriteBtn.style.display = "inline-block";
}
// console.log(currentQuoteIndex);

// const quote = randomQuote.quote
// const quoteAuthor = randomQuote.author

// toggleFavoriteBtn.classList.toggle('fas', randomQuote.isFavorite)
// toggleFavoriteBtn.classList.toggle('far', !randomQuote.isFavorite)

// isFavorite - избранная цитата
// if для того что бы показать разные иконки при нажатии
// if (randomQuote.isFavorite) {
//   toggleFavoriteBtn.classList.add('fas')
//   toggleFavoriteBtn.classList.remove('far')
// } else {
//   toggleFavoriteBtn.classList.remove('fas')
//   toggleFavoriteBtn.classList.add('far')
// }

// toggleFavoriteBtn.textContent = currentQuote.isFavorite ? 'Remove from favorites' : 'Add to favorites';

// quoteAuthorElement.textContent = quoteAuthor

/**
 * Создаем функцию toggleFavorite в нейнаходим текущую цитату использую текущий индех, а индекс меняеться каждый раз когда мы вызываем функцию
 * generateRandomQuote
 * 
 * const currentQuote = quotes[currentQuoteIndex]
 * здесь мы присваиваем найденную цитату новой переменной currentQuote  
 * 

 */

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]; // нашли один обьект в массиве обьектов
  currentQuote.isFavorite = !currentQuote.isFavorite; // для найденого обьекта мы поменяли значение на другое
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateRandomQuote();

// !quotes - используем оператор НЕ для того что конвертировать true в false или false в true

// обращаемся в определенному массиву quotes
// isFavorite - это свойство определенного обьекта который мы найдем в этом массиве обьекта
// console.table(currentQuoteIndex); // индекс опеределенного элемента в массиве

// toggleFavoriteBtn.textContent = currentQuote.isFavorite ? 'Remove from favorites' :  'Add to favorires';

// toggleFavoriteBtn.classList.toggle('fas', currentQuote.isFavorite)
// toggleFavoriteBtn.classList.toggle('far', !currentQuote.isFavorite)

// if (currentQuote.isFavorite) {
//   toggleFavoriteBtn.classList.add('fas')
//   toggleFavoriteBtn.classList.remove('far')
// } else {
//   toggleFavoriteBtn.classList.remove('fas')
//   toggleFavoriteBtn.classList.add('far')
// }

// if(toggleFavoriteBtn.textContent === 'Add to favorires') {
//   toggleFavoriteBtn.textContent = 'Remove from favorites';
// } else {
//   toggleFavoriteBtn.textContent = 'Add to favorires';
// }
