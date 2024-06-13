import imgOne from "../../assets/images/games-wide/assassins-creed-valhalla.png";
import imgTwo from "../../assets/images/games-wide/dota2.jpg";
import imgThree from "../../assets/images/games-wide/far-cry6.jpg";
import imgFour from "../../assets/images/games-wide/pubg.jpg";

var images = [
  { src: imgOne, title: "Adventure" },
  { src: imgTwo, title: "Multiplayer" },
  { src: imgThree, title: "Action" },
  { src: imgFour, title: "Strategy" },
];

export const gameCategories = {
  id: "your_id",
  lightBg: false,
  lightText: true,
  topLine: "Universe of Games",
  headline: "Wide Range of Choices",
  description:
    "With a vast selection of titles spanning genres and platforms, we've got something for every gamer out there. From thrilling adventures to heart-pounding action and everything in between, our collection has it all. So why wait? Dive into the excitement now and explore our diverse array of games. Ready to embark on your next gaming journey? Check out our games today!",
  buttonLabel: "Check out our games",
  imgStart: false,
  imgs: images,
  alt: "Your Image Alt",
  primary: true,
  dark: true,
  dark2: true,
  route: "/games",
};
