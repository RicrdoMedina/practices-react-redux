import React, { Component } from 'react'
import Playlist from './playlist'

class Categories extends Component {
  render () {
    console.log(this.props.data.categories)
    const categories = this.props.data.categories
    return (
      <div className="Categories">
        {
          categories.map((category) => {
            return <Playlist {...category} key={category.id}/>
          })
        }
      </div>
    )
  }
}

export default Categories