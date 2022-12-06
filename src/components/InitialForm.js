import styled from "styled-components";
import { BlockHeader,
         Button,
         Text,
         TextInput } from "../basic"; 
import { useLocalStorage } from "../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 574px;
    height: auto;
`

const FormContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    padding: 30px;
    border-radius: 20px;
`

const InputContainer = styled.div`
    margin-top: 50px;
    button:last-child {
        margin-top: 20px;
    }
`

const ErrorMessage = styled.div`
    color: #C17272;
    font-size: 15px;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
`

export const InitialForm = () => {
    const [name, setName] = useLocalStorage("name", "")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const validateName = () => {
        if(name.length < 5){
            setErrorMessage("Name must be at least 5 characters long")
        } else {
            setErrorMessage("")
            navigate('/welcome')
        }
    }

    return(<>
        <BlockContainer>
            <BlockHeader>Sign up</BlockHeader>
            <FormContainer>
                <Text>WELCOME TO BIBRAIN</Text>
                <Text>
                    To begin exploring our catalog <br/>
                    Please provide a name
                </Text>
                <InputContainer>
                { errorMessage === "" ? <></> : <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <TextInput label={"name"} onChange={e => setName(e.target.value)}/>
                    <Button onClick={validateName}>Submit</Button>
                </InputContainer>
            </FormContainer>
        </BlockContainer>
    </>)
}