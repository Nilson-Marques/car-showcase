"use client"

import {SearchManufacturer} from "./"

const SearchBar = () => {
    const handelSearch = () => {}
  return (
    <form className="searchbar" onSubmit=
    {handelSearch}>
        <div className="searchbar__item">
           <SearchManufacturer/> 
        </div>

    </form>
  )
}

export default SearchBar
