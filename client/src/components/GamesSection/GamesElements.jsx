import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const GamesContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  padding-bottom: 80px;
  min-height: 90vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: white;
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  padding: 20px;
  width: 80%;
  height: 100%;
`;

export const GameCard = styled(LinkR)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const GameImage = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  max-width: 100%;
  max-height: 100%;

  /* Responsive adjustments */
  @media (max-width: 250px) {
    width: 100%;
  }
`;

export const GameTitle = styled.h3`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: normal;
  color: white;
`;

export const SearchBar = styled.input`
  width: 200px;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
`;

export const AddNewBar = styled(LinkR)`
  color: darkred;
  padding: 5px 10px;
  border-radius: 5px;
  background: white;
`;

export const FilterButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const DropdownButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

export const SelectedCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
`;

export const SelectedCategory = styled.div`
  background-color: darkred;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
`;
