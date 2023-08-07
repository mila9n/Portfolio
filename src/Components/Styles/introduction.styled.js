import styled from "styled-components";

export const IntroductionStyle = styled.section`
  height: 91vh;
  display: flex;
  align-items: center;
  .container {
    padding: 16px;
    width: 80%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    & > div:nth-of-type(1) {
      width: 60%;

      .greeting {
        font-size: 20px;
        line-height: 1.2;
        font-weight: 500;
        color: #112d4e;
        margin-left: 4px;
      }
      h2 {
        font-size: 70px;
        color: #3f72af;
        line-height: 1;
        margin: 20px 0 0px;
        font-weight: 700;
      }

      .outline {
        -webkit-text-fill-color: #dbe2ef;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #112d4e;
      }

      h3 {
        font-size: 34px;
        color: #112d4e;
        font-weight: 400;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        max-width: 80%;
        line-height: 1.6;
        margin: 5px 0 10px 4px;
      }

      & > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-start;

        a {
          display: table;
          padding: 10px;
          font-size: 30px;
          color: #3f72af;
          transition: transform 300ms ease-in-out, color 300ms ease-in-out;
        }

        .github:hover {
          color: black;
          transform: scale(1.4);
        }
        .linkedin:hover {
          color: blue;
          transform: scale(1.4);
        }
      }
    }
    & > div:nth-of-type(2) {
      width: 300px;
      height: 300px;
      overflow: hidden;
      background-color: #dbe2ef;
      box-shadow: 6px 6px 10px #112d4e;
      transition: box-shadow 300ms ease-in-out;
      border-left: 2px solid #112d4e;
      border-top: 2px solid #112d4e;
      border-radius: 5px;

      &:hover {
        box-shadow: 8px 8px 10px #112d4e;
      }
    }
  }

  @media (max-width: 950px) {
    .container {
      width: 95%;
    }
  }

  @media (max-width: 800px) {
    & > .container > div:nth-of-type(1) {
      h2 {
        font-size: 50px;
      }

      h3 {
        font-size: 26px;
      }

      p {
        font-size: 14px;
      }
    }

    & > .container > div:nth-of-type(2) {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 690px) {
    .container {
      /* margin: 30px auto 20px; */
    }

    & > .container {
      flex-direction: column-reverse;
    }

    & > .container > div:nth-of-type(1) {
      width: 100%;
      text-align: center;

      & > p {
        max-width: 60%;
        margin: 10px auto;
      }

      & > .greeting {
        font-size: 18px;
        margin-left: 0;
      }

      h2 {
        font-size: 40px;
        margin: 10px 0 0px;
      }

      h3 {
        font-size: 22px;
        color: #112d4e;
        font-weight: 400;
      }

      p {
        font-size: 14px;
        max-width: 100%;
        margin-top: 4px;
        margin-left: 0px;
      }

      div {
        justify-content: center;
      }
    }

    & > .container > div:nth-of-type(2) {
      margin-bottom: 50px;
      box-shadow: 4px 4px 10px #112d4e;
      width: 200px;
      height: 200px;

      &:hover {
        box-shadow: 6px 6px 10px #112d4e;
      }
    }
  }

  @media (max-height: 600px) {
    height: auto;
  }
`;
