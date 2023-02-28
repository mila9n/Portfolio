import styled from "styled-components";

export const HeadingStyle = styled.h4`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3;
  display: table;
  color: #112d4e;
  padding: 5px 10px;
  margin-bottom: 30px;
  background-color: #dbe2ef;
  border-left: 1px solid #112d4e;
  border-top: 1px solid #112d4e;
  box-shadow: 5px 5px 2px #112d4e;

  @media (max-width: 690px) {
    margin: 0 auto 30px;
  }

  @media (max-width: 450px) {
    & {
      font-size: 24px;
    }
  }
`;
