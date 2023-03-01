import styled from "styled-components";

export const ProjectDetailStyle = styled.div`
  padding: 0px 0px 0 15px;
  margin: 50px auto 80px;
  display: flex;
  justify-content: space-between;

  & > .details {
    width: 50%;
  }

  & > .image {
    width: 46%;

    img {
      width: 100%;
      border-radius: 10px;
      transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    img:hover {
      transform: scale(1.05);
      box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.1);
    }
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
      margin: 50px auto 60px;
    }

    & > .details {
      width: 100%;
      margin-bottom: 15px;
    }

    & > .image {
      width: 100%;
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
