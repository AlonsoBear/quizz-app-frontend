import styled from "styled-components";
import { ProfileStats, BlockHeader, Answer } from "../basic";

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
                <ProfileStats/>
                <Answer/>
            </ContentContainer>
        </BlockContainer>
    </>)
}