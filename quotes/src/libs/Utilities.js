import quotes from "./quotes.json"

let allQuotes = quotes.quotes;

export function show() {
    console.log(allQuotes)
}

export function filterQuotesByAuthor(authorName) {
    return allQuotes.filter(quote => quote.author === authorName)
}

export function filterQuotesBySource(sourceName) {
    return allQuotes.filter(quote => quote.source === sourceName)
}

export function filterQuotesByCategory(categoryName) {
    return allQuotes.filter(quote => quote.category.includes(categoryName))
}

export function findAuthors() {
    let authors = [];
    allQuotes.forEach(function (quote) {
        let author = quote.author;
        if(!authors.includes(author)) {
            authors.push(author);
        }
    });
    return authors;
}

export function findCategories() {
    let categories = [];
    allQuotes.forEach(function (quote) {
        quote.category.forEach(function (category) {
            if(!categories.includes(category)) {
                categories.push(category);
            }
        })
    });
    return categories;
}

export function findSources() {
    let sources = [];
    allQuotes.forEach(function (quote) {
        let source = quote.source;
        if(!sources.includes(source)) {
            sources .push(source);
        }
    });
    return sources;
}
