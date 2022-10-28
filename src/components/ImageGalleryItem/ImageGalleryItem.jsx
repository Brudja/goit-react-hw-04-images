import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({images}) => {
  const[largeImage, setLargeImage] = useState(null);
  // state = {
  //   largeImage: null,
  // };

  const openModal = img => {
    if (!largeImage) {
      const { largeImageURL, tags } = img;
      setLargeImage({ tags, largeImageURL });
      return;
    }
    setLargeImage( null );
  };

 
    return (
      <>
        {images.map(image => (
          <li key={image.id} className={css.galleryItem}>
            <img
              className={css.liImage}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => openModal(image)}
            />
          </li>
        ))}
        {largeImage && (
          <Modal
            img={largeImage.largeImageURL}
            alt={largeImage.tags}
            onClose={openModal}
          />
        )}
      </>
    );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
