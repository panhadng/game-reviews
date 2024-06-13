import styled from "styled-components";

export const NewsDetailsContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  min-height: 90vh;
  height: auto;
  width: 100%;
  display: flex;
`;

export const NewsDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const NewsDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 80px;
`;

export const NewsDetailsImage = styled.img`
  height: 300px;
  width: 450px;
  object-fit: fill; 
`;

export const NewsDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const NewsTitle = styled.h2`
  color: grey;
  font-size: 20px;
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;
`;

export const PublisherDetails = styled.div`
  color: grey;
  margin-top: 10px;
`;

export const Date = styled.span`
  color: grey;
`;

export const Subtitle = styled.p`
  color: white;
  margin-top: 20px;
  text-align: justify;
`;

export const ClicksContainer = styled.div`
  color: white;
  margin-top: 20px;
`;

export const ClickIcon = styled.i`
  color: red;
  margin-right: 5px;
`;

export const ArticleTitle = styled.div`
  color: white;
  width: 80%;
  h2 {
    border-bottom: 1px solid #ddd;
  }
`;

export const Article = styled.article`
  color: grey;
  padding-top: 10px;
  text-align: justify;
  width: 80%;
`;
