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
     {/* onSearchChange = le moment ou la valeur de la rech' change > {handleOnSearchChange = prend en charge le moment} */}
    </div>
  );
}

export default App;

// const handleOnSearchChange = 