import styled from "styled-components";

const TextContainer = styled.div`
    width: 100%;

    ${props => {
        if (props.textAlign === "left") return "text-align: left;"
        else if (props.textAlign === "right") return "text-align: right;"
        else return "text-align: center;"
    }}
`

const TextWrapper = styled.p`
    font-family: "Lao Sangam MN";
    margin: 0;
    ${props => props.fontSize !== undefined ? 
        "font-size: " + props.fontSize + ";" :
        "font-size: 25px;" }

    ${props => props.color !== undefined ? 
        "color: " + props.color + ";" :
        "color: #707070;" }
`


export const Text = ({ children, fontSize, color, textAlign }) => {
    return(<TextContainer textAlign={textAlign}>
        <TextWrapper fontSize={fontSize} color={color} textAlign={textAlign}>
            {children}
        </TextWrapper>
    </TextContainer>)
}