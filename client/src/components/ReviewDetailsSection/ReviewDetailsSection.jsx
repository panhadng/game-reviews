import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  ReviewDetailsContainer,
  ReviewDetailsWrapper,
  ReviewDetailsContent,
  ReviewDetailsImage,
  ReviewDetailsInfo,
  Headings,
  UserDetails,
  Date,
  Description,
  LikesContainer,
  HeartIcon,
  GameTitle,
} from "./ReviewDetailsElements";
import {
  GridTitle,
  Review,
  ReviewDescription,
  ReviewsSection,
} from "../GameDetailsSection/GameDetailsElements";
import { UserDate } from "../ReviewsSection/ReviewsElements";

const ReviewDetailsSection = ({ games, users, reviews }) => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [gameImageUrl, setGameImageUrl] = useState(null);
  const [gameTitle, setGameTitle] = useState("");
  const [mainUser, setMainUser] = useState(null);
  const getUserDetails = (userId) => users.find((user) => user.id === userId);

  useEffect(() => {
    // Find the review based on the id parameter
    const foundReview = reviews.find((review) => review.id === parseInt(id));
    setReview(foundReview);

    // Get user details
    const thisUser = getUserDetails(foundReview.user);
    setMainUser(thisUser);

    if (foundReview) {
      // Find the game corresponding to the review's gameId and get its image URL and title
      const game = games.find((game) => game.id === foundReview.game);
      if (game) {
        setGameImageUrl(game.imageUrl);
        setGameTitle(game.title);
      }

      // Filter top reviews based on game
      const topReviews = reviews
        .filter((review) => review.game === foundReview.game)
        .sort((a, b) => b.likes - a.likes);
      setFilteredReviews(topReviews);
    }
  }, [id, games, reviews]);

  return (
    <ReviewDetailsContainer>
      {review ? (
        <ReviewDetailsWrapper>
          <ReviewDetailsContent>
            <ReviewDetailsImage src={gameImageUrl} alt={gameTitle} />
            <ReviewDetailsInfo>
              <Headings>Review Details</Headings>
              <GameTitle>{gameTitle}</GameTitle>
              <UserDetails>
                <strong style={{ color: "red" }}>{mainUser.username}</strong>{" "}
                <span>|</span>{" "}
                <Date>{moment(review.date).format("MMM Do, YYYY")}</Date>
              </UserDetails>
              <Description>{review.description}</Description>
              <LikesContainer>
                <HeartIcon className="fas fa-heart" />
                {review.likes}
              </LikesContainer>
            </ReviewDetailsInfo>
          </ReviewDetailsContent>
          <GridTitle>
            <h2>Other Reviews of {gameTitle}</h2>
          </GridTitle>
          <ReviewsSection>
            {filteredReviews.map((rev, index) => {
              const user = getUserDetails(rev.user);
              return (
                rev !== review && (
                  <Review
                    key={index}
                    style={
                      filteredReviews.length === index + 1
                        ? {}
                        : { borderBottom: "1px solid #ddd" }
                    }
                  >
                    <UserDate>
                      <strong>{user.username}</strong> <span>|</span>{" "}
                      {moment(rev.date).format("MMM Do, YYYY")}
                    </UserDate>
                    <ReviewDescription style={{ marginBottom: "10px" }}>
                      {rev.description}
                    </ReviewDescription>
                    <LikesContainer>
                      <HeartIcon className="fas fa-heart" /> {rev.likes}
                    </LikesContainer>
                  </Review>
                )
              );
            })}
          </ReviewsSection>
        </ReviewDetailsWrapper>
      ) : (
        <p>Review not found</p>
      )}
    </ReviewDetailsContainer>
  );
};

export default ReviewDetailsSection;
