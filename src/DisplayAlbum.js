import React from 'react'
import GallerySlides from './GallerySlides'

function DisplayAlbum (props) {
  return (
    <div>
      <GallerySlides albumId={props.albumId} />
    </div>
  )
}
export default DisplayAlbum
