import styled from "styled-components";
import { BlockHeader,
         Button,
         Text } from "../basic"; 
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 574px;
    height: auto;
`

const TextContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;

    button:last-child{
        margin-top: 30px;
    }
`

export const WelcomeWindow = () => {
    const navigate = useNavigate()
    
    const getName = () => {
        const name = JSON.parse(localStorage.getItem("name"))
        console.log(name)
        if(name.length < 5){
            return <Navigate to="/login" replace={true}/>
        }
        return name
    }

    const moveToCategories = () => {
        return navigate("/veterinary")
    }

    return(<>
        <BlockContainer>
            <BlockHeader>BIBRAIN</BlockHeader>
            <TextContainer>
                <Text>Welcome to this community {getName()}</Text>
                <Text>Currently we only offer questions about Veterinary</Text>
                <Text>We are eagerly working to bring more Topics for you to study</Text>

                <Button onClick={moveToCategories}>Explore Categories</Button>            
            </TextContainer>
        </BlockContainer>
    </>)
}