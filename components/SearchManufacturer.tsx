"use client"

import { useState, Fragment } from 'react';
import Image from 'next/image'
import { Combobox, Transition , ComboboxButton, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'

import { manufacturers } from '@/constants';
import { searchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer}:searchManufacturerProps) => {
 const [query, setQuery] = useState('');

 const filteredManufacturers = query === "" 
 ? manufacturers : 
 manufacturers.filter((item) => (
    item.toLowerCase()
    .replace(/\s+/g,"")
    .includes(query.toLowerCase().replace(/\s+/g,"")
 )))



 return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]"> 
            <Image 
            src="/car-logo.svg"
            width={20}
            height={20}
            className="ml-4"
            alt="car logo"
            />
          </ComboboxButton >
            
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="oacity-100"
            leaveTo="opacity"
            afterLeave={()=> setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.length === 0 &&
              query !== "" ? (
                <ComboboxOption value={query}
                className="search-manufacturer__option"
                >
                  creat "{query}"
                </ComboboxOption>
                ): (
                  filteredManufacturers.map((item)=> (
                    <ComboboxOption 
                    key={item}
                    className={({ active}) => ` 
                    relative search-manufacturer__option
                    ${active ? 'bg-primary-blue text-white':
                    'text-gray-900'}
                    `}
                    value={item}
                    > 
                      {item}
                    </ComboboxOption> 
                  )
                ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

