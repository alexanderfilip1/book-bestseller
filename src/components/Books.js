import React, { useState } from "react";
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

  const [bookList, setBookList] = useState(books);
  const [givenBookId, setGivenBookId] = useState("");

  const filterBook = (id) => {
    if (isNaN(id) || id === 0) {
      setBookList(books);
      return;
    }
    const newBookList = books.filter((book) => book.id === id);
    setBookList(
      newBookList.length
        ? newBookList
        : [{ author: "", title: "No book found", img: "", id: id }]
    );
  };

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <form>
          <button
            className="filterBtn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              filterBook(parseInt(givenBookId));
            }}
          >
            Filter
          </button>
          <input
            className="filterInput"
            type="number"
            placeholder="Enter id"
            value={givenBookId}
            onChange={(e) => {
              const bookId = e.target.value;
              setGivenBookId(bookId);
            }}
          />
        </form>
      </div>
      <section className="booklist">
        {bookList.map((book) => {
          const { author, title, img, id } = book;
          return (
            <article className="book" key={id}>
              <img src={img} alt={title} />
              <h2>{title}</h2>
              <h4>{author.toUpperCase()}</h4>
              <span className="number"># {id}</span>
            </article>
          );
        })}
      </section>
    </>
  );
}
