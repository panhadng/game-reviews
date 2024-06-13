import { useState } from "react";
import moment from "moment";
import {
  NewsContainer,
  NewsItem,
  Headline,
  Thumbnail,
  NewsContent,
  Subtitle,
  ClicksContainer,
  ClicksIcon,
  PublisherName,
  JournalistDate,
  PaginationContainer,
  PageButton,
  ImageBox,
} from "./NewsElements";
import {
  AddNewBar,
  FilterBar,
  Headings,
  SearchBar,
} from "../GamesSection/GamesElements";

const NewsSection = ({ news }) => {
  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNews = news.filter((item) =>
    ["headline", "publisher", "journalist"].some((field) =>
      item[field].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 4;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <NewsContainer>
      <Headings>News Feed</Headings>
      <FilterBar>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <AddNewBar to="/news/create">
          <i className="fas fa-plus"></i>
        </AddNewBar>
      </FilterBar>
      {currentNews.map((item, index) => (
        <NewsItem
          key={index}
          style={
            currentNews.length === index + 1
              ? {}
              : { borderBottom: "1px solid #ddd" }
          }
          to={`/news/${item.id}`}
        >
          <ImageBox>
            {item.thumbnail && (
              <Thumbnail src={item.thumbnail} alt="Thumbnail" />
            )}
          </ImageBox>
          <NewsContent>
            <Headline>{item.headline}</Headline>
            <Subtitle>{item.subtitle}</Subtitle>
            <JournalistDate>
              <span className="journalist">{item.journalist}</span>from{" "}
              <PublisherName>{item.publisher}</PublisherName>on{" "}
              <span className="date">
                {moment(item.date).format("MMM Do, YYYY")}
              </span>
            </JournalistDate>
            <ClicksContainer>
              <ClicksIcon className="fas fa-mouse-pointer" />
              {item.clicks}
            </ClicksContainer>
          </NewsContent>
        </NewsItem>
      ))}
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    </NewsContainer>
  );
};

export default NewsSection;
