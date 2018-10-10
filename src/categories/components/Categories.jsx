import React from 'react'
import Category from './Category.jsx'
import './categories.css'
import Search from '../../widgets/containers/SearchContainer.jsx'

function Categories (props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.categories.map((item) => {
          return <Category
                  {...item}
                  key={item.id}
                  handleOpenModal={props.handleOpenModal}
                  />
        })
      }
    </div>
  )
}

export default Categories
