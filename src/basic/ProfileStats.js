import styled from "styled-components";

const BlockContainer = styled.div`
    width: 20%;
    height: 24.479vw;
    display: flex;
    gap: 1.042vw;
    flex-direction: column;
`

const ProfileStatsContainer = styled.div`
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.563vw;
    border-radius: 1.042vw;
    padding: 1.302vw;
    padding-bottom: 2vw;
    flex-grow: 8;

    button:last-child{
        margin-top: 1.563vw;
    }
`

const ProfileName = styled.div`
    font-size: 1.563vw;
    font-family: "Lao Sangam MN";
    padding: 0.521vw;
    color: #313131;
    text-align: center;
    border-bottom: solid 0.052vw #707070;
`

const Patreon = styled.a`
    display: block;
    width: 100%;
    height: 3.281vw;
    border-radius: 1.042vw;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s background-color, color;

    &:hover { 
        background-color: #E5E5E5;
    }
`

const Image = styled.img`
    height: 70%;
    width: auto;
`

const ProfileStatsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    height: 100%;
    padding-top: 1.302vw;
`

const ProfileGridElement = styled.div`
    font-family: "Helvetica Neue";
    font-size: 1.042vw;
    color: #707070;
    color: ${props => props.color ? `${props.color};` : "#707070;"}
    ${props => {
        return props.float === "right" ? 'text-align: right;' : null
    }}
`

export const ProfileStats = ({category, points}) => {
    const getName = () => {
        const name = localStorage.getItem("name")
        return JSON.parse(name)
    }

    return(<BlockContainer>
        <ProfileStatsContainer>
            <ProfileName>
                {getName()}
            </ProfileName>
            <ProfileStatsGrid>
                <ProfileGridElement>Topic:</ProfileGridElement>
                <ProfileGridElement float="right">Veterinary</ProfileGridElement>
                <ProfileGridElement>Category:</ProfileGridElement>
                <ProfileGridElement float="right">{category}</ProfileGridElement>
                <ProfileGridElement>Quiz Points:</ProfileGridElement>
                <ProfileGridElement float="right" color={points < 0 ? "red" : null}>{points}</ProfileGridElement>
                <ProfileGridElement>Total Points</ProfileGridElement>
                <ProfileGridElement float="right">{localStorage.getItem("totalPoints")}</ProfileGridElement>
            </ProfileStatsGrid>
        </ProfileStatsContainer>
        <Patreon href="https://www.google.com">
            <Image src='/patreon.png' />
        </Patreon>
    </BlockContainer>
    )
}