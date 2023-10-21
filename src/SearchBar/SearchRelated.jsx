import React from 'react'

const SearchRelated = ({results}) => {
    // console.log(results);
  return (
    <div className='searchRelatedContainer'>
        {
        results.map((matches)=>{
      return(
        <li key={matches.id}>{matches.name}</li>

      )
        })
        }
    </div>
  )
}

export default SearchRelated
