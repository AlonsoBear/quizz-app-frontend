import styled from "styled-components";
import { Option } from "../basic";
import { useState } from "react";

const BlockContainer = styled.div`
    width: 50%;
    height: 24.479vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const QuestionContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;
    flex-grow: 1;
`

export const Question = ({ question, setAnswer, isAnswered }) => {

    const handleAnswer = () => {
        setAnswer(true)
    }

    return(<>
        <BlockContainer>
            <QuestionContainer>
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
            </QuestionContainer>
            <Option isCorrect={true} isActive={isAnswered} onClick={handleAnswer}>Hello</Option>
            <Option isCorrect={false} isActive={isAnswered} onClick={handleAnswer}>Hello</Option>
            <Option isCorrect={false} isActive={isAnswered} onClick={handleAnswer}>Hello</Option>
            <Option isCorrect={false} isActive={isAnswered} onClick={handleAnswer}>Hello</Option>
        </BlockContainer>
    </>)
}