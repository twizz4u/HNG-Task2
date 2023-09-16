import classes from "./searchResult.module.css";

const searchResult = (prop) => {
  console.log(prop);

  let idincator = classes.hide;

  if (prop.loadState) {
    idincator = classes.show;
  }
  return (
    <div className={classes.searchBoxes}>
      <div className={`${classes["lds-roller"]} ${idincator} `}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={classes.searchBox}>
        {prop.dataSearch.length === 0 && <p>No Movie found</p>}
        {prop.dataSearch &&
          prop.dataSearch.map((data) => {
            return (
              <div className={classes.searchBoxContent} key={data.id}>
                <img
                  width="24px"
                  height="24px"
                  src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                />
                <p>{data.title}</p>
                <p>{data.release_date}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default searchResult;
