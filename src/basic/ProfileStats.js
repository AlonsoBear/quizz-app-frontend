import styled from "styled-components";
import { useState } from "react";

const ProfileStatsContainer = styled.div`
    width: 20%;
    height: 24.479vw;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.563vw;
    border-radius: 1.042vw;
    padding: 1.302vw;

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

export const ProfileStats = () => {
    const getName = () => {
        const name = localStorage.getItem("name")
        return JSON.parse(name)
    }

    return(<ProfileStatsContainer>
        <ProfileName>
            {getName()}
        </ProfileName>
    </ProfileStatsContainer>
    )
}