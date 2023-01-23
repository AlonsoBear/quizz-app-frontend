import styled from "styled-components";
import { Button } from "./Button";

const BlockContainer = styled.div`
    width: 30%;
    height: auto;
`

const AnswerContainer = styled.div `
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    border-radius: 1.042vw;
    position: relative;
    padding: .302vw;
    padding-top: .7vw; 
    padding-bottom: .7vw; 
    margin-bottom: 1.042vw;
    height: 24.479vw;
    font-family: "Helvetica Neue";

    display: flex;
    flex-direction: column;
`

const AnswerPlaceholder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 1.302vw;
    color: #707070;
    opacity: .5;
    text-align: center;
`

const AnswerText = styled.div`
    font-family: "Helvetica Neue";
    font-size: 1.042vw;
    color: #707070;
    overflow: hidden;
    margin-bottom: 1.042vw;
`

const AnswerTextContainer = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 1.302vw;
`

const AnswerReference = styled.div`
    color: #1A95FF
`


export const Answer = ({isAnswered, description, reference, nextQuestion}) => {
    description = description.split("<br/>")

    return(<>

        <BlockContainer>
            <AnswerContainer>
                { isAnswered ? 
                <AnswerTextContainer>
                    { description.map(paragraph => {
                        return <AnswerText>{paragraph}</AnswerText> 
                    })}
                    <AnswerText>
                        <AnswerReference>
                            {reference}
                        </AnswerReference>
                    </AnswerText> 
                </AnswerTextContainer>
                :
                <AnswerPlaceholder>Answer will be displayed here</AnswerPlaceholder>
                }
            </AnswerContainer>
            <Button onClick={nextQuestion}>Next Question</Button>
        </BlockContainer>
    </>
    )
}