import React, { PureComponent } from 'react'
// import PropTypes from"prop-types"
import './media.css'

class Media extends PureComponent {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     autor: props.autor
  //   }
  //   //this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    autor: 'Leonidas'
  }
  handleClick = (event) => {
    // console.log(this.props.title)
    // this.setState({
    //   autor: 'Ricardo Celis'
    // })
    console.log('media',this.props.id)
    this.props.openModal(this.props.id)
  }
  render () {
    const { title, author, cover } = this.props
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={cover}
            width={260}
            height={160}
            className="Media-image"
          />
        </div>
        <h3 className="Media-title">{title}</h3>
        <p className="Media-autor">{author}</p>
      </div>
    )
  }
}

// Media.propTypes = {
//   cover: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   autor: PropTypes.string,
//   type: PropTypes.oneOf(['video','audio'])
// }

export default Media