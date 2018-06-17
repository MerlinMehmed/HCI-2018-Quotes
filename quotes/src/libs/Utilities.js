import quotes from "./quotes.json"

let allQuotes = quotes.quotes;
let counter = +sessionStorage.getItem("counter") || 0;
let id = sessionStorage.getItem("id") || 0;

const images = [
    "/images/flowers.jpg",
    "/images/sun.jpg",
    "/images/lake.jpg",
    "/images/sky.jpg",
    "/images/mountains.jpg",
    "/images/ocean2.png",
    "/images/forest.jpg"
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
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("quotes", JSON.stringify(storedQuotes));
}

export function addPersonalQuote(content, quoteId) {
    let personalQuotes = JSON.parse(sessionStorage.getItem("personal")) || [];
    quoteId = getId(quoteId);

    const index = personalQuotes.findIndex(x => +x.id === quoteId);
    let quote;
    if (index >= 0) {
        quote = personalQuotes.splice(index, 1)[0];
        quote.content = content;
    } else {
        quote = {
            id: id,
            content: content,
            author: sessionStorage.getItem("username"),
            img: getImage(),
            isPersonal: true
        };
        id++;
        sessionStorage.setItem("id", id);
    }

    personalQuotes.push(quote);
    sessionStorage.setItem("personal", JSON.stringify(personalQuotes));
}

export function deletePersonalQuote(quoteId) {
    quoteId = getId(quoteId);

    let personalQuotes = JSON.parse(sessionStorage.getItem("personal")) || [];
    const index = personalQuotes.findIndex(x => +x.id === quoteId);
    if (index > -1) {
        personalQuotes.splice(index, 1);
    }
    sessionStorage.setItem("personal", JSON.stringify(personalQuotes));
}

export function getQuoteById(quoteId) {
    quoteId = getId(quoteId);
    let storedQuotes = JSON.parse(sessionStorage.getItem("personal")) || [];
    const index = storedQuotes.findIndex(x => +x.id === quoteId);
    if (index >= 0) {
        return storedQuotes[index];
    }

    return null;
}

function getImage() {
    const image = images[counter];
    counter = (+counter + 1) % images.length;
    sessionStorage.setItem("counter", counter);
    return image;
}

function getId(quoteId) {
    if (quoteId === null || quoteId === undefined) {
        quoteId = -1;
    }
    quoteId = +quoteId;
    return quoteId;
}
