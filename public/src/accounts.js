function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

//sort alphabetically by last name (all are capitalized correclty already)
function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts;
}

//It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  const result = books.reduce((total, book) => {
    const count = book.borrows.filter((borrow) => borrow.id === account.id);
    return total + count.length;
  }, 0);
  return result;
}

//returns array of book objects - including author info - 
//represent all books currently checked out by account
function getBooksPossessedByAccount(account, books, authors) {
  let out = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  let result = out.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return {...book, author};
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
