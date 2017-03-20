# The Grand React Picture Gallery (Redux)
This is a simple React application,
made to complement [The Grand React blog post](https://medium.com/@domagojk/the-grand-react-hotel-219b4d393261).

It is explained using the same characters featured in the post in a "recipe style guide".

## Ingredients
- [Create React App](https://github.com/facebookincubator/create-react-app)

## Directions
1. Define new project using `$ create-react-app grand-react-picture-gallery`
1. Define a hotel state ([index.js:9](src/index.js#L9), [rootReducer.js](src/rootReducer.js))
1. Tell Monsieur Gustave to call Page Wrapper ([index:13](src/index.js#L13))
1. Tell Page Wrapper to call Section Main ([PageWrapper:7](src/PageWrapper.js#L7))
1. Tell Section Main to call Profile Photos ([SectionMain:7](src/SectionMain.js#L7))
1. Tell Profile Photos to send the id of an album which needs to be displayed to Display Album ([ProfilePhotos:7](src/ProfilePhotos.js#L7))
1. Tell Display Album to call Gallery Slides ([DisplayAlbum:7](src/DisplayAlbum.js#L7))
1. Connect Gallery Slides with the Lobby Boy ([GallerySlides:44](src/GallerySlides.js#L44))
1. Take photos (for given album) and current displayed photo number from the hotel state. ([GallerySlides:35](src/GallerySlides.js#L35))
1. Give Gallery Slides the means to inform the Lobby Boy to change the hotel state ([GallerySlides:40](src/GallerySlides.js#L40))
1. Tell Gallery Slides to display the picture and picture title ([GallerySlides:25](src/GallerySlides.js#L25))
1. Tell Gallery Slides to also display two buttons: "next" and "previous" and to connect them with an `onClick` handler `this.changePhoto` ([GallerySlides:28](src/GallerySlides.js#L28))
1. Tell Gallery Slides to react on visitors click event so that he determines the picture order a visitor is trying to open based on `prev` or `next` direction. ([GallerySlides:9](src/GallerySlides.js#L9))
1. Tell Gallery Slides to call `this.props.onPhotoChanged` with the new picture order, so that Lobby Boy can change the state ([GallerySlides:16](src/GallerySlides.js#L16))
1. Tell Redux, the Lobby Boy, to listen for action `'PHOTO_CHANGE'` and update the hotel state ([rootReducer:35](src/rootReducer.js#L35))
1. Open the hotel using `$ npm start`


![The Grand React](https://cdn-images-1.medium.com/max/1600/1*TsX7zVhIebAYaq4lS9_mVg.png)
