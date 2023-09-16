import { useLoaderData } from "react-router-dom";
import classes from "./DetailPage.module.css";
import Video from "../../assets/icons8-video-50.png";
import Home from "../../assets/icons8-home-24.png";
import movieIcon from "../../assets/icons8-movie-projector-32.png";
import upcomingIcon from "../../assets/icons8-upcoming-64.png";
import videonavIcon from "../../assets/icons8-video-24.png";
import LogoutIcon from "../../assets/icons8-logout-50.png";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  // console.log(data.videos.results[3].key);

  // style={{
  // backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
  // }}

  return (
    <div className={classes.detailBox}>
      <div className={classes.sideBar}>
        <div className={classes.sideBarHomeBox}>
          <img src={Video} width="24px" height="24px" />
          <h3>MovieBox</h3>
        </div>
        <ul>
          <li>
            <img src={Home} className={classes.icon} /> <span>Home</span>
          </li>
          <li>
            <img src={movieIcon} className={classes.icon} />
            <span>Movies</span>
          </li>
          <li>
            <img src={videonavIcon} />
            <span>Tv Series</span>
          </li>
          <li>
            <img src={upcomingIcon} width="24px" height="24px" />
            <span>Upcoming</span>
          </li>
        </ul>

        <div className={classes.sideBarContent}>
          <h4>Play movie quizzes and earn free tickets</h4>
          <span>50k peoeple are playing now</span>
        </div>

        <div className={classes.sideBarLogoutBox}>
          <img
            width="24px"
            height="24px"
            src={LogoutIcon}
            className={classes.icon}
          />
          <p>Logout</p>
        </div>
      </div>
      <div className={classes.imageBox}>
        {data.videos && (
          <iframe
            className={classes.trailer}
            src={`https://www.youtube.com/embed/${data.videos.results[1].key}`}
            title="Youtube Player"
            frameBorder="0"
          ></iframe>
        )}
      </div>
      <div className={classes.contentHead}>
        <div>
          <h3 data-testid="movie-title">{data.title}</h3>
          <span>.</span>
          <p data-testid="movie-release-date">{data.release_date}</p>
          <span>.</span>
          <h3>Runtime</h3>
          <span>.</span>
          <p data-testid="movie-overview">{`${data.runtime} minutes`}</p>
        </div>
        <div>
          <span>star</span>
          <span>8.5</span>
          <span>|</span>
          <span>350K</span>
        </div>
      </div>
      <div className={classes.contentBox}>
        <div>
          <p>{data.overview}</p>
          <p>
            <span>Director:</span>
          </p>
          <p>
            <span>Writers:</span>
          </p>
          <p>
            <span>Stars:</span>
          </p>
        </div>
        <div className={classes.contentBoxBtn}>
          <button>Top rated move </button>
          <button>Award Nomination</button>
        </div>
      </div>
      <aside className={classes.asideBox}>
        <div className={classes.asideBtn}>
          <button>See showtimes</button>
          <button>More watch options</button>
        </div>

        <div className={classes.asideBtnImage}>
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
        </div>
      </aside>
    </div>
  );
};

export default Details;

export async function Loader({ params }) {
  const id = params.id;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=390d564c4b60c7c2c1d7da404f2fc4b3&append_to_response=credits,videos`
  );

  if (!response.ok) {
    //
  } else {
    return response;
  }
}
