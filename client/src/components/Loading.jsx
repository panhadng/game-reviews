import styled from "styled-components";

const LoadingContainer = styled.div`
  margin-top: -80px;
  padding-top: 120px;
  background: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: white;
  padding-bottom: 80px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="17.5" y="30" width="15" height="40" fill="red">
          <animate
            attributeName="height"
            begin="-0.5s"
            calcMode="spline"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="50;100;50"
          ></animate>
        </rect>
        <rect x="42.5" y="30" width="15" height="40" fill="red">
          <animate
            attributeName="height"
            begin="0s"
            calcMode="spline"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="50;100;50"
          ></animate>
        </rect>
        <rect x="67.5" y="30" width="15" height="40" fill="red">
          <animate
            attributeName="height"
            begin="0.5s"
            calcMode="spline"
            dur="1s"
            keySplines="0 0.5 0.5 1"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="50;100;50"
          ></animate>
        </rect>
      </svg>
    </LoadingContainer>
  );
};

export default Loading;
