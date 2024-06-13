import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import ScrollToTop from "../components/ScrollToTop";
import AxiosInstance from "../components/Axios";
import Loading from "../components/Loading";

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gamesData, setGamesData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // get all the news data
  const GetData = async () => {
    try {
      // Fetch both game and review data concurrently
      const [games, reviews, users] = await Promise.all([
        AxiosInstance.get(`game/`),
        AxiosInstance.get(`review/`),
        AxiosInstance.get(`user/`),
      ]);
      setGamesData(games.data);
      setReviewsData(reviews.data);
      setUsersData(users.data);
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
        <ReviewsSection
          games={gamesData}
          reviews={reviewsData}
          users={usersData}
        />
      )}
      <Footer />
    </>
  );
};

export default Reviews;
