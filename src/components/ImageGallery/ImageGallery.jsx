import { Component } from 'react';
import {getGalleryService} from "../../services/Pixabey"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"
import { Loader } from 'components/Loader/Loader';
import css from "./ImageGallery.module.css"
import PropTypes from 'prop-types'

export class ImageGallery extends Component {
    state = {
        images:[],
        isLoading: false,
    }


async componentDidUpdate(prevProps, prevState){
  if(this.props.searchNameImage === "") return
    if(
        prevProps.searchNameImage !== this.props.searchNameImage
        
    ){
        this.setState({isLoading:true});
        const data = await getGalleryService(this.props.searchNameImage, this.props.page);
        this.setState({images: data, isLoading: false});
    }
    
    if (prevProps.page !== this.props.page && this.props.page !== 1){
      this.setState({isLoading:true});
      const data = await getGalleryService(this.props.searchNameImage, this.props.page);
      this.setState((prevState => ({images: [...prevState.images, ...data], isLoading: false})));
    }

}




  render(){
    return (<>
    {this.state.isLoading && <Loader/>}      
      <ul className={css.gallery}><ImageGalleryItem images={this.state.images} />
      </ul></>
    );
  }
}

ImageGallery.propTypes ={
  searchNameImage: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}