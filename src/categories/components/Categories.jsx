import React from 'react'
import Category from './Category.jsx'
import './categories.css'

function Categories (props) {
  return (
    <div className="Categories">
      {
        props.categories.map((item) => {
          return <Category {...item} key={item.id}/>
        })
      }
    </div>
  )
}

export default Categories
