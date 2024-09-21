"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Combobox, Transition , ComboboxButton, ComboboxInput } from '@headlessui/react'


import { searchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer}:searchManufacturerProps) => {
 const [query, setQuery] = useState('')

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
          >

          </ComboboxInput>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
