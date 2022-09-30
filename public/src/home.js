//return number that represents number of book objects in array
function getTotalBooksCount(books) {
  let counter = 0;
  for(let number in books){
    counter ++
  }
  return counter;
}

function getTotalAccountsCount(accounts) {
  let counter = 0;
  for(let number in accounts){
    counter ++
  }
  return counter;
}

//returns number for number of books currently checked out (borrows return false)
//filter() builds new array of items that match condition - length is how many are borrowed
function getBooksBorrowedCount(books) {
  const result = books.filter((book) => book.borrows[0].returned === false);
  return result.length;
}

//array of 5 items or fewer of most common genres
//each array object has name key with genre name value - use reduce()
//and count key with value of how many times genre occurs
function getMostCommonGenres(books) {
  //const count = {};
  const newGenres = books.reduce((book, {genre}) => {
    book[genre] ? book[genre] ++ : book[genre] = 1;
    return book;
  }, {});

  return Object.entries(newGenres).map(([name, count]) => 
  ({name, count})).sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5);
//loop through books use =>
  //check if current genre exists ex. count[book.genre] increment count by 1 if it exists, 
  //else create and set count to 1
  //create another variable for array set equal to 
  //return object with name and count
  //return entire collection 
  //return a function call to helper function for sorting and slicing array
}

//returns array 5 items or fewer - most popular books in library
//more popular books borrowed more - sort()
//each item returned had name key with book name and count key for # times borrowed
function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const titles = { 
      name: book.title,
      count: book.borrows.length };
     return titles;
   }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
   return result;
}

//returns array 5 or fewer for authors whose books checked out most
//populatiry - find all books written by author, add up # of times borrowed
//object returned has name key:(first last of author) count:# of times borrowed
function getMostPopularAuthors(books, authors) {
  const result = []; //create empty array
  authors.forEach((author) => {
    const authorSort = books.filter((book) => book.authorId === author.id);
    let counter = 0;
    authorSort.forEach((book) => (counter += book.borrows.length));
    result.push({
      name: `${author.name.first} ${author.name.last}`,
      count: counter,
    });
  });
  result.sort((authorA, authorB) => (authorB.count - authorA.count));
  result.length = 5;
  return result;
//loop over collection of authors
//use length of borrows array for count
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
