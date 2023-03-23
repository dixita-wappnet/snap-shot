import './App.css';
import Images from './components/Images';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';
import { createContext, useState } from 'react';


// create context
export const ImageContext = createContext();

const accessKey = "ySPokfmp6mnRWkRrQ2cD1Czg4pEGSa0-xG3rj4lETBw"
function App() {
  
  const [searchImage, setSearchImage] = useState()

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${accessKey}`);
  console.log(response);
   
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron children={<SearchField/>}/>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
