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