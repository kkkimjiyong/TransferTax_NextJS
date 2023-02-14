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

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FlexBox = styled.div`
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: white;
`;

const Wrap = styled.div`
  animation: ${smoothAppear} 1s;
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
