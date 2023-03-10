import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export const ResultBox = ({
  response,
  question,
  index,
  edit,
  setAlert,
  setClick,
  click,
  setEdit,
}: {
  response: string;
  question: string;
  index: number;
  edit: boolean;
  click: number;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setClick: React.Dispatch<React.SetStateAction<number>>;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <Wrap
      onClick={() => {
        setClick(index);
        if (edit && index !== 0) {
          setAlert(true);
        }
        if (edit && index === 0) {
          if (
            window.confirm(
              "양도 물건이 달라지는 경우, 설문조사를 처음부터 다시 시작해야합니다. 다시 시작하시겠습니까?"
            )
          ) {
            router.push("/survey");
          } else {
            setEdit(false);
          }
        }
      }}
      edit={edit}
    >
      <QuestionBox>
        Q{index + 1}. {question}
      </QuestionBox>
      <div>A. {response}</div>
    </Wrap>
  );
};

const Wrap = styled.div<{ edit: boolean }>`
  z-index: 2;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: white;
  border: 1px solid var(--color-main);
  box-shadow: ${({ edit }) => edit && " 0px 2px 5px 0px gray"};
  :hover {
    border: ${({ edit }) => edit && "2px solid var(--color-thickSub)"};
    transform: ${({ edit }) => edit && "scale(1.03)"};
    cursor: ${({ edit }) => edit && "pointer"};
  }
  border-radius: 10px;
  margin-bottom: 13px;
  font-size: 14px;
  padding: 10px 10px;
`;

const QuestionBox = styled.div`
  width: 90%;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;
