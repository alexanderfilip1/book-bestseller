import React from "react";
import Book from "./Book";
import img1 from "../images/image-1.jpg";
import img2 from "../images/image-2.jpg";
import img3 from "../images/image-3.jpg";
import img4 from "../images/image-4.jpg";
import img5 from "../images/image-5.jpg";
import img6 from "../images/image-6.jpg";

export default function Books() {
  const books = [
    {
      author: "John Macleod",
      title: "Annabel's Eyes",
      img: img1,
      id: 1,
    },
    {
      author: "John Boyne",
      title: "All the Broken Places: A Novel",
      img: img2,
      id: 2,
    },
    {
      author: "Jonathan Rosen",
      title: "The Best Minds",
      img: img3,
      id: 3,
    },
    {
      author: "Robert T. Kiyosaki",
      title: "Rich Dad Poor Dad",
      img: img4,
      id: 4,
    },
    {
      author: "Robert T. Kiyosaki",
      title: "Why We Want You To Be Rich",
      img: img5,
      id: 5,
    },
    {
      author: "Jonathan Beskin",
      title: "The Least Likely Millionaire",
      img: img6,
      id: 6,
    },
  ];
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} number={index} />;
        })}
      </section>
    </>
  );
}
