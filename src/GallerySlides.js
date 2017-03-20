import React from 'react'
import { connect } from 'react-redux'

class GallerySlides extends React.Component {
  changePhoto (direction) {
    const { currentPhotoNum, photos, onPhotoChanged } = this.props
    let newPhotoNum = false

    if (direction === 'next' && currentPhotoNum !== photos.length - 1) {
      newPhotoNum = currentPhotoNum + 1
    } else if (direction === 'prev' && currentPhotoNum > 0) {
      newPhotoNum = currentPhotoNum - 1
    }

    if (newPhotoNum !== false) {
      onPhotoChanged(newPhotoNum)
    }
  }

  render () {
    const { currentPhotoNum, photos } = this.props
    
    return (
      <div>
        <b>{photos[currentPhotoNum].title}</b>
        <br />
        <img src={photos[currentPhotoNum].url} alt='' />
        <button onClick={() => this.changePhoto('prev')}>Previous</button>
        <button onClick={() => this.changePhoto('next')}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  photos: state.photos.filter(p => p.album === ownProps.albumId),
  currentPhotoNum: state.currentPhotoNum
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPhotoChanged: photo => dispatch({type: 'PHOTO_CHANGE', payload: photo})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GallerySlides)
