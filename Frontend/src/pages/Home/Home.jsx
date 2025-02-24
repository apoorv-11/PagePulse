import Banner from "../../components/Banner.jsx";
import TopSellers from "../../components/TopSelling.jsx";
import Recommended from "../../components/Recommended.jsx";
import News from "../../components/News.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </>
  );
};

export default Home;
