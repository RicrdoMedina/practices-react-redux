import React, { PureComponent } from 'react'
import Playlist from './playlist'

class Categories extends PureComponent {
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