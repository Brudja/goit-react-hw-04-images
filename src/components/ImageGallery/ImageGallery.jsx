import { useState, useEffect } from 'react';
import { getGalleryService } from '../../services/Pixabey';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchNameImage, page }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  // state = {
  //     images:[],
  //     isLoading: false,
  // }

  useEffect(() => {
    const fetch = async () => {
      if (page !== 1) {
        setIsLoading(true);
        const data = await getGalleryService(searchNameImage, page);
        setIsLoading(false);
        setImages(prevState => [...prevState, ...data]);
        return;
      }
      if (searchNameImage) {
        setIsLoading(true);
        const data = await getGalleryService(searchNameImage, page);
        setIsLoading(false);
        setImages(data);
      }
      
      // this.setState((prevState => ({images: [...prevState.images, ...data]
    };
    fetch();
  }, [searchNameImage, page]);

  // async componentDidUpdate(prevProps, prevState){
  //   if(this.props.searchNameImage === "") return
  //     if(
  //         prevProps.searchNameImage !== this.props.searchNameImage

  //     ){
  //         this.setState({isLoading:true});
  //         const data = await getGalleryService(this.props.searchNameImage, this.props.page);
  //         this.setState({images: data, isLoading: false});
  //     }

  //     if (prevProps.page !== this.props.page && this.props.page !== 1){
  //       this.setState({isLoading:true});
  //       const data = await getGalleryService(this.props.searchNameImage, this.props.page);
  //       this.setState((prevState => ({images: [...prevState.images, ...data], isLoading: false})));
  //     }

  // }

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.gallery}>
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  searchNameImage: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
