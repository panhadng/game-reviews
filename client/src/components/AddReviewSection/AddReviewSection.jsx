import { useForm, Controller } from "react-hook-form";
import {
  AddReviewContainer,
  AddReviewWrapper,
  AddReviewForm,
  AddReviewField,
  AddReviewLabel,
  AddReviewInput,
  AddReviewTextArea,
  AddReviewButton,
  Headings,
} from "./AddReviewElements";
import AxiosInstance from "../Axios";
import { useNavigate } from "react-router-dom";

const AddReviewSection = () => {
  const navigate = useNavigate();

  const defaultValues = {
    username: "",
    gameId: "",
    date: "",
    description: "",
  };

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  const submission = async (data) => {
    try {
      await AxiosInstance.post(`reviews/`, data).then(() => {
        navigate(`/reviews`);
      });
    } catch (error) {
      console.error(
        "There was an error submitting the form!",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <AddReviewContainer>
      <AddReviewWrapper>
        <Headings>Add Review</Headings>
        <AddReviewForm onSubmit={handleSubmit(submission)}>
          <AddReviewField>
            <AddReviewLabel>Username:</AddReviewLabel>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <AddReviewInput
                  {...field}
                  required
                  placeholder="Enter your username"
                />
              )}
            />
          </AddReviewField>
          <AddReviewField>
            <AddReviewLabel>Game ID:</AddReviewLabel>
            <Controller
              name="gameId"
              control={control}
              render={({ field }) => (
                <AddReviewInput
                  type="number"
                  {...field}
                  required
                  placeholder="Enter the game ID"
                />
              )}
            />
          </AddReviewField>
          <AddReviewField>
            <AddReviewLabel>Date:</AddReviewLabel>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <AddReviewInput type="date" {...field} required />
              )}
            />
          </AddReviewField>
          <AddReviewField>
            <AddReviewLabel>Description:</AddReviewLabel>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <AddReviewTextArea
                  {...field}
                  rows="10"
                  required
                  placeholder="Write the review"
                />
              )}
            />
          </AddReviewField>
          <AddReviewButton type="submit">Submit</AddReviewButton>
        </AddReviewForm>
      </AddReviewWrapper>
    </AddReviewContainer>
  );
};

export default AddReviewSection;
