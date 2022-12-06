import styled from "styled-components";
import { useState } from "react";

const CategoryContainer = styled.div`
    font-family: "Lao Sangam MN";
    font-size: 15px;
    color: #707070;
    border: 1px solid #707070;
    border-radius: 20px;
    text-align: center;
    padding: 7px 0;
    ${props => {
        if (props.active) return "background-color: #1A95FF; color: white; border-color: #1A95FF;"
    }}

    &:hover {
        ${props => {
            if(!props.active){
                return "background-color: #65B3F7; color: white; border-color: #65B3F7;"
            }
        }
        }
        cursor: pointer;
    }
`

export const Category = ({ children, onClick }) => {
    const [active, setActive] = useState(false)

    const handleActivation = () => {
        active ? setActive(false) : setActive(true)
    }

    return(<>
        <CategoryContainer onClick={() => { onClick(); handleActivation()}} active={active}>
            {children}
        </CategoryContainer>
    </>
    )
}