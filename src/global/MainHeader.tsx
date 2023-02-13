import React from "react";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";
import TaxBackRawLogo from "../Assets/Image/TaxBack_Text.png";
import Image from "next/image";

export const MainHeader = ({ title }: { title?: string }) => {
  return (
    <Wrap>
      <Image className="img" src={TaxBackRawLogo} alt="로고" />

      <FlexBox>
        <ShareBox>공동인증센터</ShareBox>{" "}
        <BsFillBellFill className="icon" size={24} />
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  padding-top: 10%;
  .img {
    width: 101px;
    height: 23px;
  }
`;

const ShareBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid var(--color-sub);
  color: var(--color-sub);
  padding: 1%;
  width: 80px;
  border-radius: 25px;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    background-color: var(--color-sub);
    color: white;
  }
`;

const FlexBox = styled.div`
  display: flex;
  .icon {
    color: var(--color-thickSub);
  }
`;
