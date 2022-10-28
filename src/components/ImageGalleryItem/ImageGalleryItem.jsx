import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    largeImage: null,
  };

  openModal = img => {
    if (!this.state.largeImage) {
      const { largeImageURL, tags } = img;
      this.setState({ largeImage: { tags, largeImageURL } });
      return;
    }
    this.setState({ largeImage: null });
  };

  render() {
    return (
      <>
        {this.props.images.map(image => (
          <li key={image.id} className={css.galleryItem}>
            <img
              className={css.liImage}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(image)}
            />
          </li>
        ))}
        {this.state.largeImage && (
          <Modal
            img={this.state.largeImage.largeImageURL}
            alt={this.state.largeImage.tags}
            onClose={this.openModal}
          />
        )}
      </>
    );
  }
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
