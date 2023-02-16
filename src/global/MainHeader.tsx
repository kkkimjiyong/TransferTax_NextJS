import React from "react";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";
import TaxBackRawLogo from "../Assets/Image/TaxBack_Text.png";
import Image from "next/image";
import { useRouter } from "next/router";

export const MainHeader = ({ title }: { title?: string }) => {
  const router = useRouter();
  return (
    <Wrap>
      <Image className="txtlogo" src={TaxBackRawLogo} alt="로고" />

      <FlexBox>
        <ShareBox>공동인증센터</ShareBox>{" "}
        <BsFillBellFill className="icon" size={24} />
      </FlexBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  .txtlogo {
    margin-left: -10px;
    width: 101px;
    height: 23px;
  }
`;

const HeaderTxt = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-thickSub);
`;

const ShareBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid var(--color-sub);
  color: var(--color-sub);
  padding: 1%;
  width: 90px;
  height: 30px;
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
  align-items: center;
  .icon {
    color: var(--color-thickSub);
  }
`;
