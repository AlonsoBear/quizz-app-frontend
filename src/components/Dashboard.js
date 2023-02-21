import { useState } from "react";
import styled from "styled-components";
import { BlockHeader, Button, DashboardInput } from "../basic";
import axios from "axios"

const BlockContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const DashboardContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.563vw;
    border-radius: 1.042vw;
    font-family: "Helvetica Neue";
    font-size: 1.042vw;

    * {
        margin-bottom: 20px;
    }

    *:last-child {
        margin-bottom: 0;
    }
`

const InputGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;

    div {
        margin-bottom: 0;
    }
`

const ResponseStatus = styled.div`
    width: fit-content;
    height: auto;
    margin: 20px auto;
    font-size: 15px;
    ${props => {
        return props.isCorrect ? 
            "color: #32C008;" :
            "color: #C0131D;"
    }}
`

export const Dashboard = () => {
    const [question, setQuestion] = useState("")
    const [categories, setCategories] = useState([])
    const [reference, setReference] = useState("")
    const [description, setDescription] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")
    const [option4, setOption4] = useState("")
    const [status, setStatus] = useState("")

    const resetState = () => {
        setQuestion("")
        setCategories([])
        setReference("")
        setDescription("")
        setDifficulty("")
        setOption1("")
        setOption2("")
        setOption3("")
        setOption4("")
    }

    const generateData = () => {
        const newExercise = {
            "question": question,
            "options": [{
                "answer": option1,
                "isCorrect": true
                }, {
                "answer": option2,
                "isCorrect": false
                }, {
                "answer": option3,
                "isCorrect": false
                }, {
                "answer": option4,
                "isCorrect": false
                }],
            "difficulty": difficulty,
            "categories": categories,
            "description": description,
            "reference": reference
        }
        return newExercise
    }
    
    const handleSubmit = () => {
        const newData = generateData()
        const response = axios({
            method: 'post',
            url: "http://localhost:5000/exercises",
            data: newData
        }).then(res => {
            console.log(res)
            resetState()
            setStatus("success")
        }).catch(_ => {
            setStatus("failure")
        })
    }

    return(<>
        <BlockContainer>
            <BlockHeader>Add Question</BlockHeader>
            <DashboardContainer>
                <DashboardInput value={question} onChange={e => setQuestion(e.target.value)}label="question"></DashboardInput>
                <InputGrid>
                    <DashboardInput value={option1} onChange={e => setOption1(e.target.value)}label="Option 1"></DashboardInput>
                    <DashboardInput value={option2} onChange={e => setOption2(e.target.value)}label="Option 2"></DashboardInput>
                    <DashboardInput value={option3} onChange={e => setOption3(e.target.value)}label="Option 3"></DashboardInput>
                    <DashboardInput value={option4} onChange={e => setOption4(e.target.value)}label="Option 4"></DashboardInput>
                </InputGrid>
                <DashboardInput value={difficulty} onChange={e => setDifficulty([e.target.value])}label="difficulty"></DashboardInput>
                <DashboardInput value={categories} onChange={e => setCategories([e.target.value])}label="category"></DashboardInput>
                <DashboardInput value={description} onChange={e => setDescription(e.target.value)}label="description" type="text-area"></DashboardInput>
                <DashboardInput value={reference} onChange={e => setReference(e.target.value)}label="reference"></DashboardInput>
                { status !== "" ?  
                    (status == "success" ? 
                        <ResponseStatus isCorrect={true}>Question created successfully</ResponseStatus> :
                        <ResponseStatus isCorrect={false}>Error while creating question</ResponseStatus>) :
                    null
                }
                <Button onClick={handleSubmit}>Submit</Button>
            </DashboardContainer>
        </BlockContainer>
    </>)
}