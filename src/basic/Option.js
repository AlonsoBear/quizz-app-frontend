import styled from "styled-components";
import { useState } from "react";

const OptionContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 20px;
    font-size: 20px;
    margin-bottom: 20px;

    ${
        props => {
            if(props.isActive)
                return props.isCorrect ? 
                    "background-color: green;" :
                    "background-color: red;"
        }
    }
`

export const Option = ({ children, isCorrect, isActive }) => {
    

    return(<>
        <OptionContainer isCorrect={isCorrect} isActive={isActive}>
            {children}
        </OptionContainer>        
    </>
    )
}