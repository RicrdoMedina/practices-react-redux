import React from 'react'
import Category from './Category.jsx'
import './categories.css'
import Search from '../../widgets/containers/SearchContainer.jsx'
import Media from '../../playlist/components/media.jsx'

function Categories (props) {
  return (
    <div className="Categories">
      <Search/>
      {
        props.isLoading && <p>Buscando tus videos favoritos...</p>
      }
      {
        props.search.map((item) => {
          return <Media
                  openModal={props.handleOpenModal}
                  id={item.get('id')}
                  title={item.get('title')} 
                  author={item.get('author')} 
                  cover={item.get('cover')}  
                  key={item.get('id')}
                />
        })
      }
      {
        props.categories.map((item) => {
          return <Category
                    description={item.get('description')}
                    title={item.get('title')}
                    playlist={item.get('playlist')}
                    key={item.get('id')}
                    handleOpenModal={props.handleOpenModal}
                  />
        })
      }
    </div>
  )
}

export default Categories
