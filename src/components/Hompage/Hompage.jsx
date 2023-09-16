import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

const Hompage = () => {
  const data = useLoaderData();
  data.results.length = 11;
  const coverData = data.results[0];
  const moviesData = data.results;

  return (
    <>
      <Hero coverData={coverData} />
      <Content moviesData={moviesData} />
      <Footer />
    </>
  );
};

export default Hompage;
