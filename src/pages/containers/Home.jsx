import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout.jsx'
import Categories from '../../categories/components/Categories.jsx'
import Related from '../../related/components/Related.jsx'

class Home extends Component {
  render () {
    return (
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
      </HomeLayout>
    )
  }
}

export default Home
