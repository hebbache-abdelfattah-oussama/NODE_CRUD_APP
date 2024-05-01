const express = require("express");

const router = express.Router();

let books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    description:
      "A novel by Harper Lee, set in the American South during the 1930s, which deals with serious issues such as racial injustice and the loss of innocence.",
    price: 12.99,
    category: "Fiction",
    year: 1960,
  },
  {
    id: 2,
    title: "1984",
    description:
      "A dystopian novel by George Orwell, depicting a totalitarian regime and exploring themes of government surveillance, propaganda, and control.",
    price: 10.49,
    category: "Science Fiction",
    year: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    description:
      "A novel by F. Scott Fitzgerald, set in the Jazz Age, which explores themes of decadence, idealism, and the American Dream.",
    price: 11.99,
    category: "Fiction",
    year: 1925,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    description:
      "The first book in the Harry Potter series by J.K. Rowling, following the adventures of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry.",
    price: 14.99,
    category: "Fantasy",
    year: 1997,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    description:
      "A novel by J.D. Salinger, narrated by a young protagonist, Holden Caulfield, who reflects on his experiences in New York City after being expelled from prep school.",
    price: 9.99,
    category: "Fiction",
    year: 1951,
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    description:
      "A novel by Jane Austen, focusing on the manners and morals of the British upper class in the early 19th century, particularly the romantic entanglements of the Bennet sisters.",
    price: 8.99,
    category: "Romance",
    year: 1813,
  },
  {
    id: 7,
    title: "The Hobbit",
    description:
      "A fantasy novel by J.R.R. Tolkien, following the journey of the hobbit Bilbo Baggins as he sets out to help a group of dwarves reclaim their homeland from the dragon Smaug.",
    price: 13.49,
    category: "Fantasy",
    year: 1937,
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    description:
      "A high fantasy epic trilogy by J.R.R. Tolkien, set in the fictional world of Middle-earth, which follows the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    price: 29.99,
    category: "Fantasy",
    year: 1954,
  },
  {
    id: 9,
    title: "The Da Vinci Code",
    description:
      "A mystery thriller novel by Dan Brown, which follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a conspiracy involving the Catholic Church.",
    price: 16.99,
    category: "Thriller",
    year: 2003,
  },
  {
    id: 10,
    title: "The Alchemist",
    description:
      "A philosophical novel by Paulo Coelho, following the journey of an Andalusian shepherd named Santiago as he travels in search of a hidden treasure.",
    price: 10.99,
    category: "Fiction",
    year: 1988,
  },
];

router.get("/books", (req, res) => {
  res.render("books/index", {
    books: books,
  });
});

router.get("/books/:id/show", (req, res) => {
  const book = books.find((book) => book.id == req.params.id);

  if (book) {
    res.render("books/show", {
      book: book,
    });
  } else {
    res.status(404).send("Book not found");
  }
});

router.get("/books/create", (req, res) => {
  res.render("books/create");
});

router.post('/books/create', (req, res) => {
  // Verifier les informations
  books.push({
    id: req.body.id,
    title: req.body.title,
    price: req.body.price
  });
  res.redirect(`/books/${req.body.id}/show`);
});

module.exports = router;
