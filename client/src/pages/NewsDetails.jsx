import { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import NewsDetailsSection from "../components/NewsDetailsSection/NewsDetailsSection";
import AxiosInstance from "../components/Axios";
import Loading from "../components/Loading";
import ScrollToTop from "../components/ScrollToTop";

const NewsDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // get all the news data
  const GetData = async () => {
    try {
      const response = await AxiosInstance.get(`news/`);
      setNewsData(response.data);
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

  // render loading message or news details section based on loading state
  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      {loading ? (
        <Loading style={{ width: "80%" }}>Loading...</Loading>
      ) : (
        <NewsDetailsSection newsData={newsData} />
      )}
      <Footer />
    </>
  );
};

export default NewsDetails;
