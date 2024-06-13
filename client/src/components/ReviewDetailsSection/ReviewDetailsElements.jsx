import styled from "styled-components";

export const ReviewDetailsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  min-height: 90vh;
  height: auto;
  width: 100%;
  display: flex;
`;

export const ReviewDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const ReviewDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 80px;
`;

export const ReviewDetailsImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const ReviewDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const GameTitle = styled.h2`
  color: grey;
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;
`;

export const UserDetails = styled.div`
  color: grey;
  margin-top: 10px;
`;

export const Date = styled.span`
  color: grey;
`;

export const Description = styled.p`
  color: white;
  margin-top: 20px;
  text-align: justify;
`;

export const LikesContainer = styled.div`
  color: white;
  margin-top: 10px;
`;

export const HeartIcon = styled.i`
  color: red;
  margin-right: 5px;
`;
