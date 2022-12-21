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
    const [exercises, setExercises] = useState([])

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
            setExercises(response.data.data)
        })
    }, [])

    
    useEffect(() => {
        const newQuestions = exercises
        newQuestions.pop()
        setExercises(newQuestions)
    }, [isAnswered])

    if(exercises.length == 0)
        return(<></>)
    return(<>
        <BlockContainer>
      
            <BlockHeader>VETERINARY</BlockHeader>
            <ContentContainer>
                <ProfileStats/>
                <Question exercise={exercises[exercises.length - 1]} setAnswer={setIsAnswered} isAnswered={isAnswered}/>
                <Answer isAnswered={isAnswered} description={exercises[exercises.length - 1].description} reference={exercises[exercises.length - 1].reference}/>
            </ContentContainer>
        </BlockContainer>
    </>)
}