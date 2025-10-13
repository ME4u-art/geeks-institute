// Array of quotes
let quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 2, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
];

// Variables to track last random quote
let lastIndex = -1;

// Display a random quote
const generateBtn = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const likeCount = document.getElementById("like-count");

function displayQuote(index) {
    const q = quotes[index];
    quoteText.textContent = `"${q.quote}"`;
    quoteAuthor.textContent = `— ${q.author}`;
    likeCount.textContent = `Likes: ${q.likes}`;
}

generateBtn.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    lastIndex = randomIndex;
    displayQuote(randomIndex);
});

// Buttons for quote stats
document.getElementById("char-with-space").addEventListener("click", () => {
    alert(`Characters (with spaces): ${quoteText.textContent.length}`);
});

document.getElementById("char-no-space").addEventListener("click", () => {
    const lengthNoSpace = quoteText.textContent.replace(/\s/g, '').length;
    alert(`Characters (no spaces): ${lengthNoSpace}`);
});

document.getElementById("word-count").addEventListener("click", () => {
    const wordCount = quoteText.textContent.split(/\s+/).filter(word => word.length > 0).length;
    alert(`Word count: ${wordCount}`);
});

// Like button
document.getElementById("like-btn").addEventListener("click", () => {
    if (lastIndex !== -1) {
        quotes[lastIndex].likes++;
        likeCount.textContent = `Likes: ${quotes[lastIndex].likes}`;
    }
});

// Add new quote
document.getElementById("add-quote-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newQuote = document.getElementById("new-quote").value.trim();
    const newAuthor = document.getElementById("new-author").value.trim();
    if (newQuote && newAuthor) {
        const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;
        quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
        document.getElementById("new-quote").value = "";
        document.getElementById("new-author").value = "";
        alert("Quote added successfully!");
    }
});

// Filter quotes by author
let filteredQuotes = [];
let filteredIndex = 0;
const filteredQuoteText = document.getElementById("filtered-quote-text");
const filteredQuoteAuthor = document.getElementById("filtered-quote-author");

function displayFilteredQuote(index) {
    const q = filteredQuotes[index];
    filteredQuoteText.textContent = `"${q.quote}"`;
    filteredQuoteAuthor.textContent = `— ${q.author}`;
}

document.getElementById("filter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.getElementById("filter-author").value.trim().toLowerCase();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author);
    if (filteredQuotes.length === 0) {
        filteredQuoteText.textContent = "No quotes found for this author.";
        filteredQuoteAuthor.textContent = "";
    } else {
        filteredIndex = 0;
        displayFilteredQuote(filteredIndex);
    }
});

// Previous and Next buttons
document.getElementById("prev-quote").addEventListener("click", () => {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        displayFilteredQuote(filteredIndex);
    }
});

document.getElementById("next-quote").addEventListener("click", () => {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
        displayFilteredQuote(filteredIndex);
    }
});
