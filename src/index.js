import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Setup vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I love you to the moon and back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
  title: "Our Class is a Family",
  author: "Sandie Sonkie",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia est
          facere molestias fugit, aliquid consequatur. Nulla incidunt expedita
          quos. Ea necessitatibus facere architecto nihil aliquam atque. Fuga ea
          aperiam nesciunt.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  // Bisa juga (props) lalu panggil props.img etc.
  const {img, title, author, children} = props
  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
