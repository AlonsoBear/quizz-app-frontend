import styled from "styled-components";
import { ProfileStats, 
         BlockHeader,
         Answer,
         Option } from "../basic";
import { Question } from "./Question";

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80.104vw;
    height: auto;
`

const ContentContainer = styled.div`
    display: flex;
    gap: 20px
`

export const Exercise = () => {
    

    return(<>
        <BlockContainer>
            <BlockHeader>VETERINARY</BlockHeader>
            <ContentContainer>
                <ProfileStats/>
                <Question/>
                <Answer isAnswered={false} description="this is my test description" reference="google"/>
            </ContentContainer>
        </BlockContainer>
    </>)
}