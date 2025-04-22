import { handleQuote } from "./src/handlers/quote.js";

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", handleQuote);

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

// choseRandomQuote();

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
