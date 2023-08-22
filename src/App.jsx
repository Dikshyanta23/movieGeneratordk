import { useEffect, useState } from 'react'
import './index.css'
import Form from './Components/Form';
import results from './data';
import Data from './Components/Data';

//url for fetching the movie data
const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

function App() {
  
  const [number, setNumber] = useState(1);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }


  // const fetchMovies = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjUxNWQ0YjRlYmYyMzc0ZmI1MjczYzUyMDU4NDEwOCIsInN1YiI6IjYzN2U5ZjczYTNkMDI3MDA3YmQ0YWExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UphWgKO_6dJZ53S6e6n6PEzQcacytDBi1-fnAULzENs',
  //     },
  //   };

  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   // setAllMovies(data.results);
  // }

  const fetchMovies = async () => {
    setAllMovies(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(number)
    setAllMovies(shuffle(allMovies))
    const movieList = allMovies.slice(0, amount);
    
    setMovies(movieList);
  }
  useEffect(() => {
     fetchMovies();
  },[])

  return (
    <main>
      <h2>Generate popular movies</h2>
      <Form number={number} setNumber={setNumber} handleSubmit={handleSubmit}/>
      <Data movies = {movies}/>
    </main>
  )
}

export default App
