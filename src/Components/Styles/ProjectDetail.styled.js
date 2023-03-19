import styled from "styled-components";

export const ProjectDetailStyle = styled.div`
  padding: 0px 0px 0 15px;
  margin: 50px auto 80px;
  display: flex;
  justify-content: space-between;

  & > .details {
    width: 43%;
  }

  & > .image {
    width: 55%;
    img {
      width: 100%;
      cursor: pointer;
      box-shadow: 1px 1px 30px lightgray;
      transition: box-shadow 400ms ease-in-out;
      border-radius: 10px;
    }
  }
  img:hover {
    box-shadow: 10px 10px 30px lightgray;
  }

  .tablet-image {
    display: none;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 10px;
    color: #3f72af;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .tags > span {
    display: block;
    border: 2px solid #112d4e;
    background-color: #dbe2ef;
    font-weight: 600;
    font-size: 14px;
    padding: 0px 5px;
    border-radius: 5px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 12px;
    margin-bottom: 15px;
  }

  .link,
  .live__link {
    display: table;
    margin: 10px 0;
    cursor: pointer;

    & > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 5px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #3f72af;

      span {
        font-size: 20px;
        color: #3f72af;
        line-height: 1;
        transition: all 300ms ease-in-out;
      }
    }

    a:hover {
      color: blue;
    }

    a:hover span {
      transform: scaleX(1.4);
      margin-left: 10px;
    }
  }

  @media (max-width: 800px) {
    & {
      flex-direction: column;
      margin: 30px auto 20px;
    }

    .tablet-image {
      display: flex;
      width: 100%;
      margin: 15px 0;

      img {
        margin: 0 auto;
        cursor: pointer;
        box-shadow: 1px 1px 30px lightgray;
        transition: box-shadow 400ms ease-in-out;
      }
    }
    img:hover {
      box-shadow: 10px 10px 30px lightgray;
    }

    & > .image {
      display: none;
    }

    & > .details {
      width: 100%;
      margin-bottom: 15px;
    }

    & > .image {
      width: 80%;
      margin: 0 auto;
    }

    .link {
      margin: 5px 0 0;
    }
  }

  @media (max-width: 450px) {
    & {
      padding: 0;
      margin: 40px auto 50px;
    }

    h3 {
      font-size: 22px;
    }

    .tags > span {
      font-size: 12px;
    }

    p {
      font-size: 14px;
    }
    .link {
      a {
        font-size: 14px;

        span {
          font-size: 24px;
        }
      }
    }
  }
`;
