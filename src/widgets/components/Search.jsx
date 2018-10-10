import React from 'React'
import './search.css'

function Search (props) {
  return (
    <form className="Search" action="">
      <input
        type="text"
        className="Search-input"
        placeholder = "Busca tu video favorito"
      />
    </form>
  )
}

export default Search
