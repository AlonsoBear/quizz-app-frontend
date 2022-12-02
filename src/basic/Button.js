import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 100%;
    background-color: #1A95FF;
    font-family: 'Lao Sangam MN';
    font-size: 25px;
    color: white;
    border-radius: 20px;
    border: none;
    padding: 15px;
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