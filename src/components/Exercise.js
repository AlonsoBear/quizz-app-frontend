import styled from "styled-components";
import { ProfileStats, 
         BlockHeader,
         Answer,
         Option } from "../basic";
import { Question } from "./Question";
import { useState, useEffect } from "react";
import axios from "axios";

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80.104vw;
    height: auto;
`

const ContentContainer = styled.div`
    display: flex;
    gap: 20px
`

export const Exercise = ({ topicId, categories }) => {
    const [isAnswered, setIsAnswered] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const response = axios({
            method: 'get',
            url: "http://localhost:5000/exercises",
            responseType: "json",
            params: {
                topic: topicId,
                categories: categories
            }
        }).then(response => {
            setQuestions(response.data.data)
        })
    }, [])

    return(<>
        <BlockContainer>
            {questions.length > 0 ? console.log(questions[0]._id) : null}
            <BlockHeader>VETERINARY</BlockHeader>
            <ContentContainer>
                <ProfileStats/>
                <Question setAnswer={setIsAnswered} isAnswered={isAnswered}/>
                <Answer isAnswered={isAnswered} description="this is my test description" reference="google"/>
            </ContentContainer>
        </BlockContainer>
    </>)
}