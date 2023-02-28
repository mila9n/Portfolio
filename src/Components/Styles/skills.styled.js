import styled from "styled-components";

export const SkillsStyle = styled.section`
  .container {
    width: 80%;
    max-width: 1000px;
    margin: 50px auto;
    padding: 16px;

    & > div {
      width: 100%;
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;

      & > div {
        text-align: center;
        padding: 20px 10px;
        border-radius: 10px;
        border-left: 1px solid #112d4e;
        border-top: 1px solid #112d4e;
        box-shadow: 5px 5px 2px #112d4e;
        transition: all 300ms ease-in-out;
        cursor: pointer;

        & > span {
          display: table;
          margin: 0 auto;
          opacity: 1;
          color: #112d4e;
          font-size: 60px;
        }
        h5 {
          font-size: 14px;
          font-weight: 500;
          margin-top: 20px;
          color: black;
        }
      }

      & > div:hover {
        box-shadow: 8px 8px 2px #112d4e;
        background-color: #dbe2ef;
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
        margin-top: 20px;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        & > div {
          padding: 12px 10px;
          border-radius: 10px;
          box-shadow: 4px 4px 2px #112d4e;
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

  @media (max-width: 425px) {
    .container > div {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
`;
