import '../home.scss';
import { useOutletContext } from 'react-router-dom';
export default function Home() {
  const { movies } = useOutletContext();
  const favoriteMovies = movies.filter((movie) => movie.favorite);
  console.log(favoriteMovies);
  return (
    <section>
      <div className='home_header'>
        <h2>Favorite Movies</h2>
      </div>
      <div className='card'>
        {favoriteMovies.map((favoriteMovie) => (
          <div className='bl_movie'>
            <figure className='bl_movie_wrapper'>
              <a
                href={
                  favoriteMovie.Type === 'movie'
                    ? `movie/${favoriteMovie.Title}`
                    : `tv-show/${favoriteMovie.Type}`
                }
              >
                <img src={favoriteMovie.Images[1]} alt='Poster' />
                <div className='bl_movie_body'>
                  <figcaption>{favoriteMovie.Title}</figcaption>
                  <div className='bl_movie_detail'>
                    <h4>Director</h4>
                    <span> {favoriteMovie.Director}</span>
                    <h5>Genre </h5>
                    <span>{favoriteMovie.Genre}</span>
                  </div>
                </div>
              </a>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
