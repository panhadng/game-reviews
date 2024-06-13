import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NewsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  height: auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: white;
  padding-bottom: 80px;
  overflow-x: hidden;
`;

export const NewsItem = styled(LinkR)`
  padding: 15px 0 25px 0;
  margin-bottom: 10px;
  width: 80%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const Headline = styled.h2`
  font-size: 1.5em;
  color: darkred;
  margin: 0;
  @media screen and (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const ImageBox = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  width: 250px;
  height: 150px;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: grey;
`;

export const NewsContent = styled.div`
  width: 100%;
  padding-left: 40px;
  @media screen and (max-width: 480px) {
    padding-left: 20px;
  }
`;

export const Subtitle = styled.p`
  color: white;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ClicksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: white;
`;

export const ClicksIcon = styled.i`
  color: red;
  margin-right: 5px;
`;

export const JournalistDate = styled.p`
  align-items: center;
  font-size: 0.9em;
  margin-top: 10px;
  color: white;
  span {
    margin-right: 10px;
  }
  .journalist {
    color: red;
  }
  .date {
    color: grey;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const PublisherName = styled.span`
  color: darkred;
  font-weight: bold;
  font-style: italic;
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
