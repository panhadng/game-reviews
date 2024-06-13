import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Reviews from "./pages/Reviews";
import News from "./pages/News";
import GameDetails from "./pages/GameDetails";
import ReviewDetails from "./pages/ReviewDetails";
import NewsDetails from "./pages/NewsDetails";
import RegisterPage from "./pages/Register";
import AddNewsPage from "./pages/AddNews";
import AddReviewPage from "./pages/AddReview";
import LoginPage from "./pages/Login";
import PlaylistPage from "./pages/Playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetails />} />
        <Route path="/reviews/create" element={<AddReviewPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/news/create" element={<AddNewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
