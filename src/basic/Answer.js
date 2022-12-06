import styled from "styled-components";
import { Button } from "./Button";

const BlockContainer = styled.div`
    width: 80%;
    height: auto;
`

const AnswerContainer = styled.div `
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;
    padding: 25px;
    position: relative;
    margin-bottom: 20px;
    height: 24.479vw;
`

const AnswerPlaceholder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: "Helvetica Neue";
    font-size: 1.302vw;
    color: #707070;
    opacity: .5;
`



export const Answer = ({isAnswered, description}) => {

    return(<>
        <BlockContainer>
            <AnswerContainer>
                { isAnswered ? 
                "hey" : 
                <AnswerPlaceholder>Answer will be displayed here</AnswerPlaceholder>
                }
            </AnswerContainer>
            <Button>Next Question</Button>
        </BlockContainer>
    </>
    )
}