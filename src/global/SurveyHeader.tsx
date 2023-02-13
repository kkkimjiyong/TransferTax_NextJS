import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";

export const SurveyHeader = ({
  undoPage,
  title,
}: {
  undoPage: string;
  title?: string;
}) => {
  const router = useRouter();
  return (
    <Wrap>
      <HeadIcon>
        <div>
          <IoIosArrowBack
            onClick={() => router.back()}
            className="icon"
            size={24}
          />
        </div>
        <div>
          <HiHome className="icon" size={24} />
        </div>
      </HeadIcon>{" "}
      <HeadTxt>{title ? `${title}` : "양도소득세 환급받기"}</HeadTxt>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  top: 59px;
  width: 90%;
  z-index: 2;
`;

const HeadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    color: var(--color-thickSub);
    :hover {
      cursor: pointer;
    }
  }
`;

const HeadTxt = styled.div`
  margin-top: 8px;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-thickSub);
`;
