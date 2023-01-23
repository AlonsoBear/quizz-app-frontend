import styled from "styled-components";
import { useState } from "react";

const OptionContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.042vw;
    border-radius: 1.042vw;
    font-size: 1.042vw;
    transition: .3s background-color, color;
    display: flex;
    align-items: center;

    ${
        props => {
            if(props.isActive)
                return props.isCorrect ? 
                    "background-color: #B9F0B7; color: #32C008;" :
                    "background-color: #EFB1B1; color: #C0131D;"
        }
    }

    ${
        props => {
            if(!props.isActive)
                return "&:hover { background-color: #E5E5E5; cursor: pointer;}"
        }
    }
`

const CircleContainer = styled.div`
    margin-right: 0.781vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Option = ({ children, isCorrect, isActive, onClick}) => {
    let strokeColor = "black"
    if (isActive && isCorrect) strokeColor = "#24BD04"
    else if (isActive) strokeColor = "#C71313"

    return(<>
        <OptionContainer isCorrect={isCorrect} isActive={isActive} onClick={onClick}>
            <CircleContainer>
                <svg height="20" width="20">
                    <circle cx="10" cy="10" r="10" stroke={strokeColor} stroke-width="1" fill="transparent" />
                    { isActive ? <circle cx="10" cy="10" r="5" stroke={strokeColor} stroke-width="1" fill={strokeColor} /> : null}                    
                </svg>
            </CircleContainer>
            {children}
        </OptionContainer>        
    </>
    )
}