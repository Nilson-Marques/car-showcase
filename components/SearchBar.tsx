"use client";

import { useState } from 'react';

import {SearchManufacturer} from "./"

   const SearchButton = ({otherClasses} :{otherClasses:string}) => {
    <button type="submit" className={'-ml-3 z-10 {otherClasses}'}>


    </button>
   }


const SearchBar = () => {
    const [ manufacturer, setManufacturer] = useState ('');

    const handelSearch = () => {}

  return (
    <form className="searchbar" onSubmit=
    {handelSearch}>
        <div className="searchbar__item">
           <SearchManufacturer
           manufacturer={manufacturer}
           setManufacturer={setManufacturer}
           /> 
            <SearchButton otherClasses="sm:hidden"/>
        </div>
    </form>
  )
}

export default SearchBar
