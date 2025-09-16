import Library from './Library';
import './App.css';

function App() {
  const books = [
    { id: 1, name: 'Physics', price: 250 },
    { id: 2, name: 'Chemistry', price: 300 },
    { id: 3, name: 'Higher Math', price: 150 },
    { id: 4, name: 'Biology', price: 350 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <Library>books={books}</Library>
    </>
  );
}

export default App;
