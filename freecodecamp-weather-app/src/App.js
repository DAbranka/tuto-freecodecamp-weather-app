import './App.css';
import Search from './components/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      {/* Search = La bare de recherche */}
     <Search onSearchChange ={handleOnSearchChange}/> 
    </div>
  );
}

export default App;
