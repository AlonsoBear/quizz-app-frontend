import styled from "styled-components"

const Header = styled.div`
    background-color: #E8CE77;
    border-radius: 1.042vw;
    text-align: center;
    color: white;
    padding: 0.781vw;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);

    width: 100%;
    margin-bottom: 1.563vw;
`

const HeaderText = styled.h1`
    font-family: "Lao Sangam MN";
    font-size: 2.344vw;
    text-transform: uppercase;
    margin: 0;
`

export const BlockHeader = ({ children }) => {
    return(<>
        <Header>
            <HeaderText>
                {children}
            </HeaderText>
        </Header>
    </>)
}