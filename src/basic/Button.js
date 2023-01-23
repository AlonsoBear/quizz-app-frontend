import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 100%;
    background-color: #1A95FF;
    font-family: 'Lao Sangam MN';
    font-size: 1.302vw;
    color: white;
    border-radius: 1.042vw;
    border: none;
    padding: 0.781vw;
    transition: .3s background-color;

    &:hover {
        cursor: pointer;
        background-color: #1A7ACC;
    }
`

export const Button = ({ children, onClick }) => {
    return(<>
        <ButtonContainer onClick={onClick}>
            {children}
        </ButtonContainer>
    </>
    )
}