import React from 'react'
import Category from './Category.jsx'

function Categories (props) {
  return (
    <div>
      {
        props.categories.map((item) => {
          return <Category {...item} key={item.id}/>
        })
      }
    </div>
  )
}

export default Categories
