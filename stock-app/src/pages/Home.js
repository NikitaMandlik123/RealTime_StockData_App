import React from 'react';
import { useState } from 'react';
import Search from '../components/Search';
import Cards from '../components/Cards';
const Home = () => {
  const [searchString, setSearchString] = useState('');
  const handleSearchStringUpdate = (searchString)=>{
    setSearchString(searchString);
  }
  return (
    <>
      <Search searchStringUpdated={handleSearchStringUpdate}/>
      <Cards searchString={searchString}/>
        
    </>
  );
}

export default Home;