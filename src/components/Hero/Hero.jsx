import classes from "./Hero.module.css";
import searchIcon from "../../assets/icons8-search.svg";
import SearchResult from "../searchResult/Searchresult";
import videoIcon from "../../assets/icons8-video-50.png";
import nav from "../../assets/icons8-menu-30.png";
import videoButtonIcon from "../../assets/icons8-video-24.png";
import HeroIconrating from "../../assets/icons8-rating-48.png";

import { useEffect, useState } from "react";

const Hero = (prop) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const [searchData, setData] = useState(false);

  useEffect(() => {
    async function loadSearch() {
      setLoading(true);
      try {
        const response =
          searchValue &&
          (await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=390d564c4b60c7c2c1d7da404f2fc4b3`
          ));

        console.log(response);
        if (!response?.ok) {
          throw "No movie found";
        }
        const data = await response.json();
        setData(data.results.slice(0, 5));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }
    loadSearch();
  }, [searchValue]);

  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const data = prop.coverData;

  return (
    <header
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,
      }}
      className={classes.header}
    >
      <nav className={classes.navBar}>
        <div className={classes.homeBox}>
          <img src={videoIcon} width="24px" height="24px" />
          <h3>MovieBox</h3>
        </div>
        <form action="">
          <input type="search" onChange={inputHandler} />
          <img src={searchIcon} />
        </form>
        <div className={classes.signBox}>
          <img src={nav} />
          <p>Sign in </p>
        </div>
      </nav>
      {searchValue && (
        <SearchResult
          loadState={loading}
          errorState={error}
          dataSearch={searchData}
        />
      )}
      <div className={classes.headerContent}>
        <h2 className={classes.heroTitle}>{data.title}</h2>
        <div className={classes.heroRatingBox}>
          <div className={classes.heroIconBox}>
            <img width="24px" height="24px" src={HeroIconrating} />
            <span>7.5/10</span>
          </div>
        </div>
        <p className={classes.heroContent}>{data.overview}</p>

        <button className={classes.heroButton}>
          <img src={videoButtonIcon} alt="hero_button_icon" />
          Watch Trailer
        </button>
      </div>
    </header>
  );
};

export default Hero;
