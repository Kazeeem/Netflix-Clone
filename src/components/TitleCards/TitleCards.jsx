import './TitleCards.css'
import { useEffect, useRef, useState } from 'react'


const TitleCards = ({title, category}) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const readAccessToken = import.meta.env.MOVIE_DB_API_ACCESS_TOKEN;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+readAccessToken
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className="title-cards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} />
              <p>{card.original_title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TitleCards