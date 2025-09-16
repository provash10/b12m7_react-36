export default function Library({ books = [] }) {
  return (
    <div>
      <h2>Our National Central Library</h2>
      <p>book collection: {books.length}</p>
      <p>address: </p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} — {book.price} ৳
          </li>
        ))}
      </ul>
    </div>
  );
}
