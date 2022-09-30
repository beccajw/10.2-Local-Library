//find author by id - make sure author id and id match
function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

//find book by id - make sure book id and id match
function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

//return and array with two arrays inside
//first array contains book objects currently checked out
//second array contains book objects returned (true if returned, false if out)
function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  return [checkedOut, returned];
}

//return an array of 10 or fewer objects - represents ids in borrows array
//should include returned status
function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    account.returned = borrow.returned;
    return account;
  }).slice(0, 10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
