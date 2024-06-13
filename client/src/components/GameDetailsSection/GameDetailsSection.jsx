import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  GameDetailsContainer,
  GameDetailsImage,
  Headings,
  GameDetailsContent,
  GameDetailsInfo,
  Description,
  InfoItems,
  GameDetailsWrapper,
  GridTitle,
  Overview,
  OverviewTitle,
  ReviewsSection,
  Review,
  ReviewDescription,
  IgdbButton,
  ImageBox,
  AddButton,
} from "./GameDetailsElements";
import {
  GameCard,
  GameGrid,
  GameImage,
  GameTitle,
} from "../GamesSection/GamesElements";
import {
  HeartIcon,
  LikesContainer,
  UserDate,
} from "../ReviewsSection/ReviewsElements";
import usePlaylist from "./Playlist";

const GameDetailsSection = ({ games, reviews, users }) => {
  const { id } = useParams();
  const game = games.find((game) => game.id === parseInt(id));
  const [filteredReviews, setFilteredReviews] = useState([]);
  const { playlist, isGameInPlaylist, handlePlaylist } = usePlaylist();

  const getUserDetails = (userId) => users.find((user) => user.id === userId);

  useEffect(() => {
    // Filter top reviews based on game
    const topReviews = reviews
      .filter((review) => review.game === parseInt(id))
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
    setFilteredReviews(topReviews);
  }, [id, reviews]);

  return (
    <GameDetailsContainer>
      {game ? (
        <GameDetailsWrapper>
          <GameDetailsContent>
            <ImageBox>
              <GameDetailsImage src={game.imageUrl} alt={game.title} />
              <AddButton onClick={() => handlePlaylist(game.id)}>
                {isGameInPlaylist(
                  game.id,
                  parseInt(localStorage.getItem("userId"))
                ) ? (
                  <>
                    <i
                      className="fas fa-times"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Delete from Playlist
                  </>
                ) : (
                  <>
                    <i
                      className="fas fa-plus"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Add to Playlist
                  </>
                )}
              </AddButton>
            </ImageBox>
            <GameDetailsInfo>
              <Headings>
                {game.title}{" "}
                <IgdbButton
                  to={game.igdbUrl}
                  hidden={!game.igdbUrl ? true : false}
                >
                  IGDB
                </IgdbButton>
              </Headings>
              <InfoItems>
                <strong style={{ color: "white" }}>Genres: </strong>
                {game.genre}
              </InfoItems>
              <InfoItems>
                <strong style={{ color: "white" }}>Published On: </strong>
                {game.published_date}
              </InfoItems>
              <InfoItems>
                <strong style={{ color: "white" }}>Rating: </strong>
                {game.rating}
              </InfoItems>
              <InfoItems>
                <strong style={{ color: "white" }}>Developer: </strong>
                {game.developer}
              </InfoItems>
              <InfoItems>
                <strong style={{ color: "white" }}>Publisher: </strong>
                {game.publisher}
              </InfoItems>
              <Overview>
                <OverviewTitle>Overview</OverviewTitle>
                <Description>{game.description}</Description>
              </Overview>
            </GameDetailsInfo>
          </GameDetailsContent>
          <GridTitle>
            <h2>Community Reviews</h2>
          </GridTitle>
          <ReviewsSection>
            {filteredReviews.map((review, index) => {
              const user = getUserDetails(review.user);
              return (
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
                    {moment(review.date).format("MMM Do, YYYY")}
                  </UserDate>
                  <ReviewDescription style={{ marginBottom: "10px" }}>
                    {review.description}
                  </ReviewDescription>
                  <LikesContainer>
                    <HeartIcon className="fas fa-heart" /> {review.likes}
                  </LikesContainer>
                </Review>
              );
            })}
          </ReviewsSection>
          <GridTitle>
            <h2>Other Popular Games</h2>
          </GridTitle>
          <GameGrid>
            {games.map(
              (game) =>
                game.id != id && (
                  <GameCard key={game.id} to={`/games/${game.id}`}>
                    <GameImage src={game.imageUrl} alt={game.title} />
                    <GameTitle>{game.title}</GameTitle>
                  </GameCard>
                )
            )}
          </GameGrid>
        </GameDetailsWrapper>
      ) : (
        <p>Game not found</p>
      )}
    </GameDetailsContainer>
  );
};

export default GameDetailsSection;
