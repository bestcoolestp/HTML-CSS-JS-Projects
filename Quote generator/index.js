const btnEl = document.querySelector('#btn');
const quoteEl = document.querySelector('#quote');
const authorEl = document.querySelector('#author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {
    try {
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;    
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    
    quoteEl.innerHTML = quoteContent;
    authorEl.innerHTML = quoteAuthor;

    btnEl.innerText = 'Get A New Quote';
    btnEl.disabled = false;
    } catch (error) {
        console.log(error);
    }


   
}

btnEl.addEventListener('click', getQuote);