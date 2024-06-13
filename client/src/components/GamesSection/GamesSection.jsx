import { useState } from "react";
import {
  GamesContainer,
  FilterBar,
  SearchBar,
  FilterButton,
  GameImage,
  GameTitle,
  GameGrid,
  GameCard,
  Headings,
  Dropdown,
  DropdownButton,
  SelectedCategories,
  SelectedCategory,
  RemoveButton,
} from "./GamesElements";

const GamesSection = ({ games, list }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategories = selectedCategories.every((category) =>
      game.genre.toLowerCase().includes(category.toLowerCase())
    );
    return (
      matchesSearch && (selectedCategories.length === 0 || matchesCategories)
    );
  });

  const categories = ["Action", "Adventure", "Racing", "Sport", "Shooter"];

  return (
    <GamesContainer>
      <Headings>{list}</Headings>
      <FilterBar>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <FilterButton onClick={() => setShowDropdown(!showDropdown)}>
          Filter
        </FilterButton>
        {showDropdown && (
          <Dropdown>
            {categories.map((category) => (
              <DropdownButton
                key={category}
                onClick={() => handleCategoryClick(category.toLowerCase())}
              >
                {category}
              </DropdownButton>
            ))}
          </Dropdown>
        )}
      </FilterBar>
      <SelectedCategories>
        {selectedCategories.map((category) => (
          <SelectedCategory key={category}>
            {category.toUpperCase()}
            <RemoveButton onClick={() => handleCategoryClick(category)}>
              <i className="fa fa-times"></i>
            </RemoveButton>
          </SelectedCategory>
        ))}
      </SelectedCategories>
      <GameGrid>
        {filteredGames.map((game) => (
          <GameCard key={game.id} to={`/games/${game.id}`}>
            <GameImage src={game.imageUrl} alt={game.title} />
            <GameTitle>{game.title}</GameTitle>
          </GameCard>
        ))}
      </GameGrid>
    </GamesContainer>
  );
};

export default GamesSection;
