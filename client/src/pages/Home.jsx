import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import HeroSection from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/Info";
import { aboutGamingInsights } from "../components/InfoSection/Data";
import { gameCategories } from "../components/MultiInfoSection/Data";
import Footer from "../components/Footer/Footer";
import GameList from "../components/GameList/GameList";
import MultiInfoSection from "../components/MultiInfoSection/MultiInfo";
import ScrollToTop from "../components/ScrollToTop";
import AxiosInstance from "../components/Axios";
import Loading from "../components/Loading";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // get all the news data
  const GetData = async () => {
    try {
      const response = await AxiosInstance.get(`game/`);
      setGamesData(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  // fetch data when component mounts
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      {loading ? (
        <Loading style={{ width: "80%" }}>Loading...</Loading>
      ) : (
        <>
          <GameList title={"New & Popular"} games={gamesData} />
          <GameList title={"Developer's Picks"} games={gamesData} />
          <GameList title={"Best Ratings"} games={gamesData} />
        </>
      )}
      <InfoSection {...aboutGamingInsights} />
      <MultiInfoSection {...gameCategories} />
      <Footer />
    </>
  );
};

export default Home;
