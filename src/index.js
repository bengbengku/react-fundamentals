import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Setup vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I love you to the moon and back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Sandie Sonkie",
  },

  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half",
    author: "Brit Bennet",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  // Bisa juga (props) lalu panggil props.img etc.
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
