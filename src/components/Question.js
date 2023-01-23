import styled from "styled-components";
import { Option } from "../basic";
import { useState } from "react";

const BlockContainer = styled.div`
    width: 50%;
    height: 24.479vw;
    display: flex;
    flex-direction: column;
    gap: 1.042vw;
`

const QuestionContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.563vw;
    border-radius: 1.042vw;
    flex-grow: 1;
    font-family: "Helvetica Neue";
    font-size: 1.042vw;
`

export const Question = ({ exercise, setAnswer, isAnswered }) => {
    console.log(exercise)
    const handleAnswer = () => {
        setAnswer(true)
    }

    return(<>
        <BlockContainer>
            <QuestionContainer>
                {exercise.question}
            </QuestionContainer>
            {
                exercise.options.map(option => {
                    return <Option isCorrect={option.isCorrect} isActive={isAnswered} onClick={handleAnswer}>{option.answer}</Option>
                })
            }
        </BlockContainer>
    </>)
}