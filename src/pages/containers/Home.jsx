import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout.jsx'
import Categories from '../../categories/components/Categories.jsx'

class Home extends Component {
  render () {
    return (
      <HomeLayout>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    )
  }
}

export default Home
