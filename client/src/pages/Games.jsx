import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import GamesSection from "../components/GamesSection/GamesSection";
import ScrollToTop from "../components/ScrollToTop";
import AxiosInstance from "../components/Axios";
import Loading from "../components/Loading";

const Games = () => {
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
      {loading ? (
        <Loading style={{ width: "80%" }}>Loading...</Loading>
      ) : (
        <GamesSection list={"All Games"} games={gamesData} />
      )}
      <Footer />
    </>
  );
};

export default Games;
