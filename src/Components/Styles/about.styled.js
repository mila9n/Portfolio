import styled from "styled-components";

export const AboutStyle = styled.section`
  .container {
    margin: 50px auto;
    width: 80%;
    max-width: 1000px;
    padding: 16px;
    p {
      width: 60%;
      line-height: 1.6;
      font-size: 16px;
      margin-bottom: 15px;
      font-weight: 500;
      padding: 0 5px;
    }
  }

  @media (max-width: 950px) {
    .container {
      width: 95%;
    }
  }

  @media (max-width: 690px) {
    .container {
      margin: 20px auto;
    }
    .container > p {
      width: 100%;
      padding: 0;
      text-align: none;
    }
  }

  @media (max-width: 450px) {
    .container > p {
      font-size: 14px;
    }
  }
`;
