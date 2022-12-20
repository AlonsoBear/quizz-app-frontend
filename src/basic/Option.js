import styled from "styled-components";
import { useState } from "react";

const OptionContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 20px;
    font-size: 20px;
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
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Option = ({ children, isCorrect, isActive, onClick}) => {
    

    return(<>
        <OptionContainer isCorrect={isCorrect} isActive={isActive} onClick={onClick}>
            <CircleContainer>
                <svg height="20" width="20">
                    <circle cx="10" cy="10" r="10" stroke="black" stroke-width="1" fill="transparent" />
                </svg>
            </CircleContainer>
            {children}
        </OptionContainer>        
    </>
    )
}