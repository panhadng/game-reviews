import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const GameListContainer = styled.div`
  position: relative;
  padding: 0 10%;
  padding-top: 40px;
  background-color: black;
`;

export const Title = styled.h1`
  color: darkred;
  font-weight: semibold;
  text-transform: uppercase;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const GameListWrapper = styled(motion.div)`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth;

  /* Modern and transparent scrollbar styles */
  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, 0.3);
    border-radius: 10px;
    transition: background 0.3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 100, 100, 0.5);
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.3) transparent;

  &:hover {
    scrollbar-color: rgba(100, 100, 100, 0.5) transparent;
  }
`;

export const GameItem = styled(LinkR)`
  text-decoration: none;
  flex: 0 0 auto;
  width: 250px;
  height: 300px;
  margin: 5px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 480px) {
    height: 250px;
    width: 200px;
  }
`;

export const GameImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 200px;
  }
`;

export const GameTitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 0;
  }
`;
