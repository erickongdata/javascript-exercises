const getTheTitles = function (books) {
  // return books.reduce((obj, book) => {
  //   obj.push(book.title);
  //   return obj;
  // }, []);
  return books.map(book => book.title);
};

// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];

// getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
