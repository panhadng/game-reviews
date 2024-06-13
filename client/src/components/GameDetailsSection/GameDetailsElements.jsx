import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const GameDetailsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  min-height: 90vh;
  height: auto;
  width: 100%;
  display: flex;
`;
export const GameDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const ImageBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  border-radius: 10px;
  color: white;
  background: darkred;
  text-align: center;
  width: 100%;
  text-decoration: none;
  padding: 10px;
  margin-top: 10px;
  border: 0;
  cursor: pointer;

  &:hover {
    color: darkred;
    background: white;
  }
`;

export const GameDetailsImage = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

export const IgdbButton = styled(LinkR)`
  color: white;
  background-color: darkred;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  display: ${({ hidden }) => (hidden ? "hidden" : "flex")};
  margin-top: 10px;
  height: 50px;

  &:hover {
    color: darkred;
    background-color: white;
  }
`;

export const Description = styled.p`
  color: grey;
`;

export const InfoItems = styled.div`
  color: grey;
`;

export const Overview = styled.div`
  color: white;
  margin-top: 20px;
`;

export const OverviewTitle = styled.h2`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const GameDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const GameDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-bottom: 80px;
`;

export const GridTitle = styled.div`
  color: white;
  width: 80%;
  h2 {
    border-bottom: 1px solid #ddd;
  }
`;

export const ReviewsSection = styled.div`
  color: white;
  width: 80%;
  margin-bottom: 40px;
`;

export const Review = styled.div`
  margin: 20px auto;
  padding-bottom: 20px;
`;

export const ReviewDescription = styled.div`
  color: grey;
`;
