import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 12vh;

  & > div.container {
    padding: 16px;
    width: 80%;
    margin: 0 auto;
    max-width: 1000px;

    a {
      text-decoration: none;
      color: #1e2022;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div:nth-of-type(1) {
        box-shadow: 5px 5px 2px #112d4e;
        transition: all 300ms ease-in-out;
        position: relative;
        z-index: 2;
        a {
          width: 60px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9f7f7;
          font-size: 26px;
          font-weight: 800;
          border-left: 1px solid black;
          border-top: 1px solid black;
          background-color: #dbe2ef;
        }
        /* &::before {
          content: "";
          position: absolute;
          inset: 0;
          top: -4px;
          left: -5px;
          right: 2px;
          bottom: 2px;
          border: 1px solid black;
          z-index: -1;
        } */
        &:hover {
          box-shadow: 7px 7px 1px #112d4e;
        }
      }

      & > div:nth-of-type(3) > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: #3f72af;
          position: relative;
          margin-left: 50px;
        }
        a::after {
          content: "";
          display: block;
          width: 100%;
          height: 3px;
          transform: scaleX(0);
          transform-origin: right;
          background-color: #112d4e;
          transition: transform 300ms ease-in-out;
        }
        a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }

  .button {
    display: none;
    align-items: center;
    color: #3f72af;
    font-size: 35px;
  }

  @media (max-width: 750px) {
    & > div.container {
      width: 100%;
    }

    .button {
      display: flex;
      position: relative;
      z-index: 3;
    }

    div:nth-of-type(3) {
      position: absolute;
      background-color: rgba(219, 226, 239);
      right: 0;
      top: 0;
      height: 100vh;
      width: 0;
      z-index: 2;
      overflow: hidden;
      transition: width 150ms ease-in;
    }

    div:nth-of-type(3) > div {
      display: block !important;
      position: absolute;
      width: 100%;
      top: 12vh;
      left: 0;
      padding: 0 0 0 20px;
      a {
        display: table !important;
        font-size: 20px !important;
        color: #112d4e !important;
        margin: 0 0 15px 0 !important;
      }
    }
  }

  .clicked {
    width: 300px !important;
  }
`;
