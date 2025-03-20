import BookCard from './components/bookcard'; // Corrected path
import './App.css';

function App() {
  const books = [
    {
      id: 1,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain',
      name: 'The Great Adventure',
      genre: 'Fiction',
      author: 'Jane Doe',
      price: 19.99, // Added price
    },
    {
      id: 2,
      image: 'https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf',
      name: 'Mysteries of the Universe',
      genre: 'Science',
      author: 'John Smith',
      price: 25.50, // Added price
    },
    {
      id: 3,
      image: 'https://images3.penguinrandomhouse.com/cover/9781933771106',
      name: 'History Revisited',
      genre: 'Non-Fiction',
      author: 'Emily Johnson',
      price: 18.75, // Added price
    },
    {
      id: 4,
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg',
      name: 'Culinary Delights',
      genre: 'Cooking',
      author: 'Michael Brown',
      price: 30.00, // Added price
    },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;