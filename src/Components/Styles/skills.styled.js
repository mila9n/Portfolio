import styled from "styled-components";

export const SkillsStyle = styled.section`
  .container {
    width: 80%;
    max-width: 1000px;
    margin: 50px auto 10px;
    padding: 16px;

    & > div {
      width: 100%;
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;

      & > div {
        text-align: center;
        padding: 10px 10px;
        border-radius: 10px;
        border-left: 1px solid #112d4e;
        border-top: 1px solid #112d4e;
        box-shadow: 3px 3px 2px #112d4e;
        cursor: pointer;
        transform-origin: top left;
        transform: rotate(-8deg);
        transition: all 300ms ease-in-out;

        & > span {
          display: table;
          margin: 0 auto;
          color: #112d4e;
          opacity: 0.8;
          font-size: 50px;
          transition: all 240ms ease-in-out;
        }
        h5 {
          font-size: 13px;
          font-weight: 500;
          margin-top: 10px;
          color: #112d4e;
        }
      }

      & > div:hover {
        animation: skillCard 2s ease-in-out;
        transform: rotate(3deg);
      }
    }
    @keyframes skillCard {
      0% {
        transform: rotate(-8deg);
      }
      20% {
        transform: rotate(6deg);
      }
      40% {
        transform: rotate(-2deg);
      }
      60% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(3deg);
      }
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

      & > div {
        margin-top: 50px;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;

        & > div {
          padding: 12px 10px;
          border-radius: 10px;
          cursor: pointer;

          & > span {
            font-size: 40px;
          }
          h5 {
            font-size: 12px;
            margin-top: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      margin: 20px auto;

      & > div {
        margin-top: 40px;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    }
  }

  @media (max-width: 425px) {
    .container {
      margin: 20px auto;

      & > div {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
        row-gap: 20px;

        & > div {
          padding: 5px 8px;
          border-radius: 10px;
          box-shadow: 3px 3px 2px #112d4e;

          & > span {
            font-size: 30px;
          }
          h5 {
            font-size: 10px;
            margin-top: 7px;
          }
        }
      }
    }
  }
`;
