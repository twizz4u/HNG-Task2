import { json } from "react-router-dom";
import Featured from "./Featured";
import MovieBox from "./movieBox";
import classes from "./Content.module.css";
const Content = (prop) => {
  const moviesDatas = prop.moviesData;

  return (
    <div>
      <Featured />
      <div className={classes.movieBoxes}>
        <MovieBox moviesData={moviesDatas} />
      </div>
    </div>
  );
};

export default Content;

//"https://api.themoviedb.org/3/movie/tt3554046?api_key=390d564c4b60c7c2c1d7da404f2fc4b3"
//"https://api.themoviedb.org/3/movie/238/external_ids?api_key=390d564c4b60c7c2c1d7da404f2fc4b3"

//api.themoviedb.org/3/trending/movie/week

export async function Loader() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=390d564c4b60c7c2c1d7da404f2fc4b3";
  const response = await fetch(url);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
