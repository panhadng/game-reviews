import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import AddNewsSection from "../components/AddNewsSection/AddNewsSection";
import ScrollToTop from "../components/ScrollToTop";

const AddNewsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollToTop />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <AddNewsSection />
      <Footer />
    </>
  );
};

export default AddNewsPage;
