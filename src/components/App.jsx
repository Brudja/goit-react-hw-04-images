import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import {Status} from "../services/config"
import css from "./App.module.css"


export class App extends Component{
  state = {
    status: Status.INIT,
    searhValue: '',
    page: 1,
  };

  hendleLoadMore=()=>{
this.setState(prevState => ({page: prevState.page +1}))

  }
 
  handleSearch = searhValue => {
    this.setState({ searhValue, page:1 });
  };


  render(){
  return (
    <div
      className={css.App}
    >
      <Searchbar onSubmit = {this.handleSearch}/>
      <ImageGallery searchNameImage = {this.state.searhValue} page={this.state.page}/>
      {this.state.searhValue && <Button onAddImg={this.hendleLoadMore}/>}
    </div>
  );};
};
