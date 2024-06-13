import { useState } from "react";
import moment from "moment";
import {
  ReviewsContainer,
  ReviewItem,
  Headings,
  PaginationContainer,
  PageButton,
  GameImage,
  ReviewContent,
  GameTitle,
  UserDate,
  DescriptionContainer,
  LikesContainer,
  HeartIcon,
} from "./ReviewsElements";
import {
  AddNewBar,
  FilterBar,
  SearchBar,
} from "../../components/GamesSection/GamesElements";

const ReviewsSection = ({ games, reviews, users }) => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const reviewsPerPage = 8;
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  // Get game details
  const getGameDetails = (gameId) => games.find((game) => game.id === gameId);
  const getUserDetails = (userId) => users.find((user) => user.id === userId);

  // Filter reviews based on search term
  const filteredReviews = reviews.filter((review) => {
    const game = getGameDetails(review.game);
    const user = getUserDetails(review.user);
    return (
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ReviewsContainer>
      <Headings>Reviews Feed</Headings>
      <FilterBar>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handlePageChange(1);
          }}
          placeholder="Search"
        />
        <AddNewBar to="/reviews/create">
          <i className="fas fa-plus"></i>
        </AddNewBar>
      </FilterBar>
      {currentReviews.map((review, index) => {
        const game = getGameDetails(review.game);
        const user = getUserDetails(review.user);
        return (
          <ReviewItem
            key={index}
            to={`/reviews/${review.id}`}
            style={
              currentReviews.length === index + 1
                ? {}
                : { borderBottom: "1px solid #ddd" }
            }
          >
            <GameImage src={game.imageUrl} alt={game.title} />
            <ReviewContent>
              <GameTitle>
                {game.title}
              </GameTitle>
              <UserDate>
                <strong>{user.username}</strong> <span>|</span>{" "}
                {moment(review.date).format("MMM Do, YYYY")}
              </UserDate>
              <DescriptionContainer>{review.description}</DescriptionContainer>
              <LikesContainer>
                <HeartIcon className="fas fa-heart" /> {review.likes}
              </LikesContainer>
            </ReviewContent>
          </ReviewItem>
        );
      })}
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    </ReviewsContainer>
  );
};

export default ReviewsSection;
