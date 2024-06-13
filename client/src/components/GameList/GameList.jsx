import {
  Title,
  GameListContainer,
  GameListWrapper,
  GameItem,
  GameImage,
  GameTitle,
} from "./GameListElements";
import { useEffect, useState } from "react";

const GameList = ({ games, title }) => {
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const [shuffledGames, setShuffledGames] = useState([]);

  useEffect(() => {
    setShuffledGames(shuffleArray(games));
  }, []);

  return (
    <GameListContainer>
      <Title>{title}</Title>
      <GameListWrapper>
        {shuffledGames.map((game) => (
          <GameItem key={game.id} to={`/games/${game.id}`}>
            <GameImage src={game.imageUrl} alt={game.title} />
            <GameTitle>{game.title}</GameTitle>
          </GameItem>
        ))}
      </GameListWrapper>
    </GameListContainer>
  );
};

export default GameList;
