import { useState } from 'react';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import MovieList2 from './Components/MovieList2';
import 'bootstrap/dist/css/bootstrap.min.css';

import {data} from './data'
import Filtre from './Components/Filtre';
function App() {
  const [dataMovie, setDataMovie] = useState(data)
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0)
  const AddingMovie = (kkkk)=>{
     setDataMovie([...dataMovie, kkkk])
  }
  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'space-between',margin:'20px'}}>
      <AddMovie AddingMovie={AddingMovie}/>
      <Filtre setSearch={setSearch} setRate={setRate} />
      </div>
      
     <MovieList dataMovie={dataMovie.filter(movie=> movie.title.toLocaleLowerCase().includes(search.trim().toLowerCase()) && movie.rating >= rate)}  />
      {/* <MovieList2 dataMovie={dataMovie}/> */}
      
    </div>
  );
}

export default App;
