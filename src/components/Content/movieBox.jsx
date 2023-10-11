import { Link } from "react-router-dom";
import classes from "./movieBox.module.css";
import { useEffect, useState } from "react";
import RateIcon from "../../assets/icons8-rating-48.png";
import voteCount from "../../assets/icons8-approval-64.png";

const MovieBox = (prop) => {
  const [imbd, setimbd] = useState([]);
  const Data = prop.moviesData;
  const newData = Data.slice(1);

  useEffect(() => {
    const newArray = [];
    newData.forEach((data) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${data.id}/external_ids?api_key=390d564c4b60c7c2c1d7da404f2fc4b3`
      )
        .then((response) => response.json())
        .then((data) => {
          newArray.push(data);
          setimbd([...newArray]);
        })
        .catch((error) => error);
    });
  }, []);

  const movies = newData.map((data, index) => {
    return (
      <div key={data.id} className={classes.movieBox} data-testid="movie-card">
        <Link to={`/HNG-Task2/movies/${imbd[index]?.imdb_id}`}>
          <div className={classes.movieImageBox}>
            <img
              data-testid="movie-poster"
              className={classes.movieImage}
              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            />
          </div>

          <div className={classes.movieBoxContent}>
            <h3 className={classes.movieBoxTitle} data-testid="movie-title">
              {data.title}
            </h3>
            <div className={classes.ratingBox}>
              <div>
                <img className={classes.iconRating} src={RateIcon} />
                <span>{data.vote_average}/10</span>
              </div>
              <div>
                <img className={classes.voteCountIcon} src={voteCount} />
                <span>{data.vote_count}</span>
              </div>
            </div>
            <p className={classes.date} data-testid="movie-release-date">
              {data.release_date}
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return movies;
};

export default MovieBox;

async function Loader() {
  const url = `https://api.themoviedb.org/3/movie/278/external_ids?api_key=390d564c4b60c7c2c1d7da404f2fc4b3`;
  const response = await fetch(url);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
  } else {
    console.log(await response.json());
    return response;
  }
}

Loader();
