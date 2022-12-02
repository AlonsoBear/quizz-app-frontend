import styled from "styled-components"

const Header = styled.div`
    background-color: #E8CE77;
    border-radius: 20px;
    text-align: center;
    color: white;
    padding: 15px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);

    width: 100%;
    margin-bottom: 30px;
`

const HeaderText = styled.h1`
    font-family: "Lao Sangam MN";
    font-size: 45px;
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