import React from "react";
import styled, { keyframes } from "styled-components";

export const Layout = ({ children }: { children: any }) => {
  return (
    <FlexBox className="layout">
      {" "}
      <Wrap className="layout">{children}</Wrap>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: white;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  height: 100%;
  .kakao {
    margin-top: 80px;
    margin-right: 62%;
    width: 93px;
    height: 92px;
  }
  .loading {
    position: absolute;
    width: 225px;
    height: 61px;
    left: 3%;
    top: 5%;
  }
  .background {
    width: 100%;
    position: absolute;
    z-index: 0;
  }
`;
