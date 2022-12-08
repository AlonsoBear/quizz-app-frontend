import styled from "styled-components";
import { Button } from "./Button";

const BlockContainer = styled.div`
    width: 30%;
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
    color: #707070;
    overflow: hidden;
    ${
        props => {
            return 'height: ' + props.height + "%;"
        }
    }
`

const AnswerTextContainer = styled.div`
    height: 100%;
`

const AnswerReference = styled.a`
    color: #1A95FF
`


export const Answer = ({isAnswered, description, reference}) => {

    return(<>
        <BlockContainer>
            <AnswerContainer>
                { isAnswered ? 
                <AnswerTextContainer>
                    <AnswerText height={93}>{description}</AnswerText> 
                    <AnswerText height={7}>
                        <AnswerReference href={reference}>
                            Reference
                        </AnswerReference>
                    </AnswerText> 
                </AnswerTextContainer>
                :
                <AnswerPlaceholder>Answer will be displayed here</AnswerPlaceholder>
                }
            </AnswerContainer>
            <Button>Next Question</Button>
        </BlockContainer>
    </>
    )
}