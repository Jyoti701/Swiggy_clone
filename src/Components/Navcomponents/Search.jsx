import React, { useState } from 'react'
import {Svgsearch} from '../Svg'

const Search = () => {
  const [inputdata,setInputdata]=useState([])
  return (
    <div className='search_container navitem'>
      <Svgsearch/><input type="text" placeholder='Search here' onChange={(e)=>{
      
      }}></input>
    </div>
  )
}

export default Search
