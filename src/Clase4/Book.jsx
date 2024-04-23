const BOOKS = [
  {
    name: "Dune",
    author: "Frank Herbert",
    year: 1965,
    id: 1,
    code: 123,
  },
  {
    name: "Ender's Game",
    author: "Orson Scott Card",
    year: 1985,
    id: 2,
    code: 1234,
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    id: 3,
    code: 1237,
  },
  {
    name: "1984",
    author: "George Orwell",
    year: 1949,
    id: 4,
    code: 123999,
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    id: 5,
    code: 123888,
  },
  {
    code: 123777,
    name: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    id: 6,
  },
  {
    name: "Neuromancer",
    author: "William Gibson",
    year: 1984,
    id: 7,
    code: 123111,
  },
  {
    name: "Snow Crash",
    author: "Neal Stephenson",
    year: 1992,
    id: 8,
    code: 1232222,
  },
  {
    name: "The Martian",
    author: "Andy Weir",
    year: 2011,
    id: 9,
    code: 1232222,
  },
  {
    name: "Ready Player One",
    author: "Ernest Cline",
    year: 2011,
    id: 1044444,
  },
];

function App() {
  return (
    <>
      <h1>Listado de libros 📚</h1>
      {BOOKS.map((book) => (
        <h3 key={book.id}>
          {book.name} - {book.id}
        </h3>
      ))}
    </>
  );
}

export default App;
