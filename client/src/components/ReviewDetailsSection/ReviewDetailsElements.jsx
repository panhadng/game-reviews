import styled from "styled-components";

export const ReviewDetailsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  min-height: 90vh;
  height: auto;
  width: 100%;
  display: flex;
  overflow-x: hidden;
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
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

export const ReviewDetailsImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const ReviewDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`;

export const GameTitle = styled.h2`
  color: grey;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
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
