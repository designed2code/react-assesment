import './App.css';
import AccordionComponent from './AccordionComponent';
import SearchInputComponent from './SearchInputComponent';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInputText = (e) => {
    console.log('I am triggered from SearchCOmponent');
    setSearchText(e.target.value);
  };
  return (
    <>
      <SearchInputComponent handleSearchInputText={handleSearchInputText} />
      <AccordionComponent />
    </>
  );
}

export default App;
