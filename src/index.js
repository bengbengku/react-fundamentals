import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Setup vars
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I love you to the moon and back",
    author: "Amelia Hepworth",
  },

  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Sandie Sonkie",
  },
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h4>{name}</h4>
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  // Bisa juga (props) lalu panggil props.img etc.
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book Cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
