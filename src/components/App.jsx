import { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import css from "./App.module.css"


export const App =() => {
  const [searhValue, setSearhValue] = useState("");
  const [page, setPage] = useState(1)
  // state = {
  //   status: Status.INIT,
  //   searhValue: '',
  //   page: 1,
  // };

const hendleLoadMore=()=>{
setPage(prevState => (prevState +1))
  }
 
  // 
  
  const handleSearch = searhValue => {
    setSearhValue(searhValue) || setPage(1)
  };



  return (
    <div
      className={css.App}
    >
      <Searchbar onSubmit = {handleSearch}/>
      <ImageGallery searchNameImage = {searhValue} page={page}/>
      {searhValue && <Button onAddImg={hendleLoadMore}/>}
    </div>
  );
};
