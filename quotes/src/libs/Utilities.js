import quotes from "./quotes.json"

let allQuotes = quotes.quotes;
let counter = 0;
let id = 1;
const images = [
    "/images/flowers.jpg",
    "/images/sun.jpg",
    "/images/lake.jpg",
    "/images/sky.jpg",
    "/images/mountains.jpg",
    "/images/ocean2.png",
    "/images/forest.png"
]

export function findAllQuotes() {
    return allQuotes.concat(JSON.parse(sessionStorage.getItem("quotes")) || []);
}

export function filterQuotesByAuthor(authorName) {
    return findAllQuotes().filter(quote => quote.author === authorName)
}

export function filterQuotesBySource(sourceName) {
    return findAllQuotes().filter(quote => quote.source === sourceName)
}

export function filterQuotesByCategory(categoryName) {
    if (categoryName) {
        return findAllQuotes().filter(quote => quote.category.includes(categoryName))
    }
    return [];
}

export function findAuthors() {
    let authors = [];
    findAllQuotes().forEach(function (quote) {
        let author = quote.author;
        if (!authors.includes(author)) {
            authors.push(author);
        }
    });
    return authors;
}

export function findCategories() {
    let categories = [];
    findAllQuotes().forEach(function (quote) {
        quote.category.forEach(function (category) {
            if (category && !categories.includes(category)) {
                categories.push(category);
            }
        })
    });
    return categories;
}

export function findSources() {
    let sources = [];
    findAllQuotes().forEach(function (quote) {
        let source = quote.source;
        if (!sources.includes(source)) {
            sources.push(source);
        }
    });
    return sources;
}

export function addStoredQuote(content, author, category, source) {
    let storedQuotes = JSON.parse(sessionStorage.getItem("quotes")) || [];
    storedQuotes.push({
        id: id,
        content: content,
        author: author,
        category: [category],
        source: source,
        img: getImage()
    });
    id++;
    sessionStorage.setItem("quotes", JSON.stringify(storedQuotes));
}

export function addPersonalQuote(content) {
    let personalQuotes = JSON.parse(sessionStorage.getItem("personal")) || [];
    personalQuotes.push({
        id: id,
        content: content,
        author: sessionStorage.getItem("username"),
        img: getImage(),
        isPersonal: true
    });
    id++;
    sessionStorage.setItem("personal", JSON.stringify(personalQuotes));
}

export function deleteQuote(id) {
    let storedQuotes = JSON.parse(sessionStorage.getItem("personal")) || [];
    const index = storedQuotes.findIndex(x => x.id === id);
    if (index > -1) {
        storedQuotes.splice(index, 1);
    }
    sessionStorage.setItem("personal", JSON.stringify(storedQuotes));
}

function getImage() {
    const image = images[counter];
    counter = (counter + 1) % images.length;
    return image;
}
