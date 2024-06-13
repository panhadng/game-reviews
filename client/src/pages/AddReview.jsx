import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AddReviewSection from "../components/AddReviewSection/AddReviewSection";

const AddReviewPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <AddReviewSection />
      <Footer />
    </>
  );
};

export default AddReviewPage;
