import styled from "styled-components";

export const AddReviewContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 90vh;
  width: 100%;
  padding-bottom: 80px;
`;

export const AddReviewWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #1e1e1e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AddReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddReviewField = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const AddReviewLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
`;

export const AddReviewInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2e2e2e;
  color: white;
  color-scheme: dark;
`;

export const AddReviewTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2e2e2e;
  color: white;
`;

export const AddReviewButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: darkred;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: darkred;
  }
`;

export const Headings = styled.h1`
  color: darkred;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;
