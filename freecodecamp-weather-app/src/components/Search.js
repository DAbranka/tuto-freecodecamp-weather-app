import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GeoApiUrl, geoApiOptions } from './api'

const Search = ({onSearchChange}) => { // onSearchChange = le moment ou la valeur de notre rech' change

const [search, setSearch] = useState([]); // usestate() = (etat initial de l'app)
 // search = la valeur de AsyncPaginate * setSearch = la valeur au changement

const loadOptions = (inputValue) => { //inputValue = la valeur tapé dans la barre qui servira de requete au données voulu

    return fetch(`${GeoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)

    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
const handleOnChange = (searchData) => { // handleOnChange function qui contiendra  en parametre "searchData" qui récupère les données qu'on rentre dans "AsyncPaginate" la barre de recherche.
    setSearch(searchData) // setSearch = updating our search
    onSearchChange(searchData)
};

// return = ce que l'app va affiché 
  return (
    <AsyncPaginate // ? What is AsyncPaginate ?
    placeholder="Search for city..."
    debounceTimeout={1000} // Délai de 6 second avant de request a nouveau
    value={search} // la valeur contiendra la const search *
    onChange={handleOnChange}
     // onChange = Au moment ou la valeur change > la mettre a jour
     // handleOnChange = prend en charge le moment en question
     loadOptions={loadOptions} // propriété avec valeur "loadOptions" = 
     /> 
  )
}

export default Search

// On crée un function nommée Search
// Dans cette function on y retourne la barre de recherche qui est "AsyncPaginate"
// Dans AsyncPaginate on y met
  // un placeholder = "la valeur du place holder"
  // un debounceTimout = {delai entre chaque requete}
  // value = {la valeur de AsyncPaginate}
  // onChange = {qui est le moment ou la valeur change}
    // et donc la mettre à jour avec un {handleOnchange} qui sera sa valeur.
// On crée la const [search, setSearch] = useState (initialState = etat initial de l'app)