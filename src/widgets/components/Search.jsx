import React from 'React'
import './search.css'

function Search (props) {
  return (
    <form
      className="Search"
      onSubmit={props.handleSubmit}
    >
      <input
        ref={props.setRef}
        type="text"
        className="Search-input"
        placeholder = "Busca tu video favorito"
        name="search"
        onChange={props.handleChange}
        value={props.value}
      />
    </form>
  )
}

export default Search
