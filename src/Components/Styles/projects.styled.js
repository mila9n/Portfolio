import styled from "styled-components";

export const ProjectsStyle = styled.section`
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  padding: 16px;

  & > div:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 800px) {
    & > div:nth-of-type(even) {
      flex-direction: column;
    }
  }

  @media (max-width: 950px) {
    & {
      width: 95%;
    }
  }

  @media (max-width: 690px) {
    & {
      margin: 20px auto;
    }
  }

  @media (max-width: 450px) {
    & {
      padding: 8px;
    }
  }
`;
