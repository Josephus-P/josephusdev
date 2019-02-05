import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'

class Gallery extends Component {
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={obj.thumbnail} />
          </a>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      )
    })

    return <div className="row">{gallery}</div>
  }
  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
