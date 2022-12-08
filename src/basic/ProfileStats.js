import styled from "styled-components";
import { useState } from "react";

const ProfileStatsContainer = styled.div`
    width: 20%;
    height: 24.479vw;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;
    padding: 25px;

    button:last-child{
        margin-top: 30px;
    }
`

const ProfileName = styled.div`
    font-size: 30px;
    font-family: "Lao Sangam MN";
    padding: 10px;
    color: #313131;
    text-align: center;
    border-bottom: solid 1px #707070;
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