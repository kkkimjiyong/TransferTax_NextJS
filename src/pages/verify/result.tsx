import React, { useEffect, useState } from "react";
import { Layout } from "@/global/Layout";
import { MainHeader } from "@/global/MainHeader";
import { SurveyHeader } from "@/global/SurveyHeader";
import TaxBackResult from "../../Assets/Image/Transfer_Result.png";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HomeTaxResult() {
  const router = useRouter();

  let result = 184625721;

  // --------   글자 타이핑효과  ---------
  const [number, setNumber] = useState<number>(184625721 - 80);
  const [stop, setStop] = useState<boolean>(false);
  let resultNum = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (!stop) {
        if (number === result) {
          setStop(true);
        } else {
          setNumber((prev: any) => prev + 1);
        }
      }
    }, 20);

    return () => {
      clearInterval(typingInterval);
    };
  });
  // ----------------------   양도세 납부내역 데이터   --------------------
  const [taxResult, setTaxResult] = useState<any>([
    { id: 1, title: "납부항목명", data: "2022년", price: "30,975,220" },
    { id: 2, title: "납부항목명", data: "2021년", price: "30,975,220" },
    { id: 3, title: "납부항목명", data: "2020년", price: "30,975,220" },
    { id: 4, title: "납부항목명", data: "2019년", price: "30,975,220" },
    { id: 5, title: "납부항목명", data: "2018년", price: "30,975,220" },
  ]);

  return (
    <Wrap>
      <SurveyHeader undoPage={"/verify/result"} title={"양도세 납부내역"} />
      <ResultBox>
        {/* <div className="name">{JSON.parse(name).name}님의</div> */}
        <Image className="img" src={TaxBackResult} alt="이미지" />{" "}
        <div className="name">김지용님의</div>
        <div>최근 5년간 납부한 양도세는</div>
        <ResultNum>
          <div className="number">
            <span>{resultNum}원</span> 이에요
          </div>
        </ResultNum>
      </ResultBox>{" "}
      <ResultModal>
        {taxResult.map((result: any) => (
          <Result key={result.id}>
            <div>
              {result.title}
              <div className="subtxt">{result.data} 양도소득세</div>
            </div>
            <div>{result.price}원</div>
          </Result>
        ))}
      </ResultModal>
      <ButtonBox>
        <Button onClick={() => router.push("/survey/start")}>
          양도소득세 환급받기
        </Button>
      </ButtonBox>
    </Wrap>
  );
}

const number = keyframes`
     0% {
    opacity: 0;
    transform: scale(0.7);
  }
  60% {
    transform:  scale(1.1);
  }
  100% {
    opacity: 1;
    transform:  scale(1);
  }
`;
const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultBox = styled.div`
  padding: 10px 0 20px 0;
  margin-bottom: -10px;
  margin-top: 160px;
  width: 90%;
  height: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-contentBox);
  color: var(--color-thickSub);
  font-weight: 700;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  .name {
    color: black;
  }
  .img {
    margin-top: 3%;
    width: 185px;
    height: 146px;
  }
`;

const ResultNum = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-weight: 700;
  font-size: 21px;
  color: var(--color-sub);
  .title {
    font-size: 22px;
    color: var(--color-main);
    margin-right: 3%;
  }
  .number {
    animation: ${number} 1s;
  }
`;

const SubTxt = styled.div`
  width: 90%;
  font-size: 11px;
  color: var(--color-gray);
`;

const Button = styled.div`
  color: white;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  border-radius: 30px;
  background-color: var(--color-main);
  &.left {
    background-color: white;
    color: var(--color-main);
    border: 1px solid var(--color-main);
    :hover {
      background-color: var(--color-sub);
      color: white;
    }
  }
  :hover {
    color: var(--color-lightSub);
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const ResultModal = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  height: "300px";
  transition: all 300ms ease-in-out;
  width: 100%;
  max-width: 375px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  z-index: 2;
  box-shadow: 0px -15px 20px -25px gray;
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
  .subtxt {
    margin-top: 3px;
    font-size: 12px;
    color: var(--color-gray);
  }
`;
