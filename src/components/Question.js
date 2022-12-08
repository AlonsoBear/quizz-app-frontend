import styled from "styled-components";
import { Option } from "../basic";

const BlockContainer = styled.div`
    width: 50%;
    height: auto;
`

const QuestionContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const Question = ({ question }) => {
    

    return(<>
        <BlockContainer>
            <QuestionContainer>
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
                Que pedo broooooooo, como andas?
            </QuestionContainer>
            <Option isCorrect={true} isActive={false}>Hello</Option>
            <Option isCorrect={true} isActive={false}>Hello</Option>
            <Option isCorrect={true} isActive={false}>Hello</Option>
            <Option isCorrect={true} isActive={false}>Hello</Option>
        </BlockContainer>
    </>)
}