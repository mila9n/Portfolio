import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #f9f7f7;
  box-shadow: 1px 1px 7px #3f72af;
  position: fixed;
  top: 0;
  width: 100%;

  & > div.container {
    padding: 10px 15px 15px;
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
          width: 50px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9f7f7;
          font-size: 22px;
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
  }

  @media (max-width: 750px) {
    & > div.container {
      width: 100%;
    }

    .nav_links {
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
      background-color: #dbe2ef;
      width: 0px;
      transition: width 150ms ease-in;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;

      & > div {
        margin-top: 82px;
        flex-direction: column;
        align-items: start !important;

        & > a {
          margin-bottom: 10px !important;
          margin-left: 15px !important;
        }
      }
    }

    .clicked {
      width: 300px;
    }

    .button {
      display: block;
      width: 35px;
      position: relative;
      z-index: 3;
      cursor: pointer;

      & > .bar {
        width: 100%;
        height: 5px;
        margin: 6px 0;
        background-color: #3f72af;
        border-radius: 100px;
        transform: rotate(0deg);
        transform-origin: left;
        transition: transform 150ms ease-in, opacity 50ms ease-in;
      }

      .bar1 {
        transform: rotate(40deg);
        transform-origin: left;
      }

      .bar3 {
        transform: rotate(-40deg);
        transform-origin: left;
      }

      .bar2 {
        opacity: 0;
      }
    }
  }
`;
