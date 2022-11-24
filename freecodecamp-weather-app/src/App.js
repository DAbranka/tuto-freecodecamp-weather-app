import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="container">
      <header>
      <h1 className='text-white bg-black'>
        Hello there
      </h1>
      </header>
    <main>
      <Search />
    </main>
    </div>
  );
}

export default App;
