import { useForm, Controller } from "react-hook-form";
import {
  AddNewsContainer,
  AddNewsWrapper,
  AddNewsForm,
  AddNewsField,
  AddNewsLabel,
  AddNewsInput,
  AddNewsTextArea,
  AddNewsButton,
  Headings,
} from "./AddNewsElements";
import AxiosInstance from "../Axios";
import { useNavigate } from "react-router-dom";

const AddNewsSection = () => {
  const navigate = useNavigate();

  const defaultValues = {
    headline: "",
    thumbnail: "",
    subtitle: "",
    publisher: "",
    journalist: "",
    article: "",
  };

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
  });

  const submission = async (data) => {
    try {
      await AxiosInstance.post(`news/`, data).then(() => {
        navigate(`/news`);
      });
    } catch (error) {
      console.error(
        "There was an error submitting the form!",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <AddNewsContainer>
      <AddNewsWrapper>
        <Headings>Add News Item</Headings>
        <AddNewsForm onSubmit={handleSubmit(submission)}>
          <AddNewsField>
            <AddNewsLabel>Headline:</AddNewsLabel>
            <Controller
              name="headline"
              control={control}
              render={({ field }) => (
                <AddNewsInput
                  {...field}
                  required
                  placeholder="Enter the headline"
                />
              )}
            />
          </AddNewsField>
          <AddNewsField>
            <AddNewsLabel>Thumbnail URL:</AddNewsLabel>
            <Controller
              name="thumbnail"
              control={control}
              render={({ field }) => (
                <AddNewsInput
                  type="url"
                  {...field}
                  required
                  placeholder="Enter the URL of your thumbnail"
                />
              )}
            />
          </AddNewsField>
          <AddNewsField>
            <AddNewsLabel>Subtitle:</AddNewsLabel>
            <Controller
              name="subtitle"
              control={control}
              render={({ field }) => (
                <AddNewsInput
                  {...field}
                  required
                  placeholder="Enter the subtitle"
                />
              )}
            />
          </AddNewsField>
          <AddNewsField>
            <AddNewsLabel>Publisher:</AddNewsLabel>
            <Controller
              name="publisher"
              control={control}
              render={({ field }) => (
                <AddNewsInput
                  {...field}
                  required
                  placeholder="Enter the publisher name"
                />
              )}
            />
          </AddNewsField>
          <AddNewsField>
            <AddNewsLabel>Journalist:</AddNewsLabel>
            <Controller
              name="journalist"
              control={control}
              render={({ field }) => (
                <AddNewsInput
                  {...field}
                  required
                  placeholder="Enter the journalist name"
                />
              )}
            />
          </AddNewsField>
          <AddNewsField>
            <AddNewsLabel>Article:</AddNewsLabel>
            <Controller
              name="article"
              control={control}
              render={({ field }) => (
                <AddNewsTextArea
                  {...field}
                  rows="10"
                  required
                  placeholder="Write the article"
                />
              )}
            />
          </AddNewsField>
          <AddNewsButton type="submit">Submit</AddNewsButton>
        </AddNewsForm>
      </AddNewsWrapper>
    </AddNewsContainer>
  );
};

export default AddNewsSection;
