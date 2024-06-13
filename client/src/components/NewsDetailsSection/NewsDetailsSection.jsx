import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  NewsDetailsContainer,
  NewsDetailsWrapper,
  NewsDetailsContent,
  NewsDetailsImage,
  NewsDetailsInfo,
  Headings,
  PublisherDetails,
  Date,
  Subtitle,
  ClicksContainer,
  ClickIcon,
  NewsTitle,
  Article,
  ArticleTitle,
} from "./NewsDetailsElements";

const NewsDetailsSection = ({ newsData }) => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    // Find the news based on the id parameter
    const foundNews = newsData.find((newsItem) => newsItem.id === parseInt(id));
    setNews(foundNews);
  }, [id]);

  return (
    <NewsDetailsContainer>
      {news ? (
        <NewsDetailsWrapper>
          <NewsDetailsContent>
            <NewsDetailsImage src={news.thumbnail} alt={news.headline} />
            <NewsDetailsInfo>
              <Headings>News Details</Headings>
              <NewsTitle>{news.headline}</NewsTitle>
              <PublisherDetails>
                <strong style={{ color: "red" }}>{news.journalist}</strong>{" "}
                <span>|</span>{" "}
                <Date>{moment(news.date).format("MMM Do, YYYY")}</Date>
              </PublisherDetails>
              <Subtitle>{news.subtitle}</Subtitle>
              <ClicksContainer>
                <ClickIcon className="fas fa-mouse-pointer" />
                {news.clicks}
              </ClicksContainer>
            </NewsDetailsInfo>
          </NewsDetailsContent>
          <ArticleTitle>
            <h2>News Content</h2>
          </ArticleTitle>
          <Article>{news.article}</Article>
        </NewsDetailsWrapper>
      ) : (
        <p>News not found</p>
      )}
    </NewsDetailsContainer>
  );
};

export default NewsDetailsSection;
