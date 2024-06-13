import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  ImageBg,
} from "./HeroElements";
import ImageURL from "../../assets/images/games-wide/witcher.jpg";
import { useEffect, useState } from "react";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={ImageURL} alt="background" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Explore The World</HeroH1>
        <HeroP>
          With insights from the community including professional players,
          enthusiasts, developers and critics.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to={isLoggedIn ? "/games" : "/register"}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
