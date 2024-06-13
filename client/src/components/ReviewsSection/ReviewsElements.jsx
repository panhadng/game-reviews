import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ReviewsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  padding-bottom: 80px;
  height: auto;
  min-height: 90vh;
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

export const ReviewItem = styled(LinkR)`
  padding: 15px;
  margin-bottom: 10px;
  width: 80%;
  color: white;
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

export const ReviewContent = styled.div`
  width: 100%;
  padding-left: 40px;
`;

export const GameImage = styled.img`
  max-width: 175px;
  max-height: 175px;
  margin-bottom: 10px;
  border-radius: 5px;
  object-fit: cover;
`;

export const GameTitle = styled.h2`
  font-size: 1.5em;
  color: white;
  margin: 0;
`;

export const UserDate = styled.p`
  font-size: 0.9em;
  margin: 5px 0;
  color: darkgrey;
  span {
    font-weight: normal;
  }
  & > strong {
    color: red;
    font-weight: bold;
  }
`;

export const DescriptionContainer = styled.div`
  border-top: 1px solid grey;
  text-align: justify;
  padding: 10px 0;
  margin: 10px 0;
  color: white;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  max-height: 3.5em;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const HeartIcon = styled.i`
  color: red;
  margin-right: 5px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background: ${(props) => (props.active ? "#007BFF" : "#FFF")};
  color: ${(props) => (props.active ? "#FFF" : "#007BFF")};
  border: 1px solid #007bff;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #007bff;
    color: #fff;
  }
`;
