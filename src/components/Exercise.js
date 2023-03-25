import styled from "styled-components";
import { ProfileStats, 
         BlockHeader,
         Answer } from "../basic";
import { Question } from "./Question";
import { useState, useEffect } from "react";
import axios from "../axios/axios";

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
    gap: 1.042vw
`

const initTotalPointsLS = (initialPoints) => {
    localStorage.setItem("totalPoints", initialPoints)
    return initialPoints
}

const addToTotalPoints = (amount) => {
    const currentPonts = localStorage.getItem("totalPoints")
    const newPoints = amount + +currentPonts
    localStorage.setItem("totalPoints", newPoints)
    return newPoints
}

export const Exercise = ({ topicId, categories }) => {
    const [isAnswered, setIsAnswered] = useState(false)
    const [exercises, setExercises] = useState([])
    const [points, setPoints] = useState(0)
    const totalPoints = localStorage.getItem("totalPoints") ? 
        localStorage.getItem("totalPoints") :
        initTotalPointsLS(0)

    useEffect(() => {
        const response = axios
            .get("/exercises", {
                params: {
                    topic: topicId,
                    categories: categories
                }
            })
            .then(response => {
                setExercises(response.data.data)
            })
    }, [])

    const handleNextQuestion = () => {
        const newExercises = [...exercises]
        newExercises.pop()
        setExercises(newExercises)
        setIsAnswered(false)
    }

    const handlePoints = (isCorrect) => {
        if (isCorrect){
            setPoints(points + 5)
            addToTotalPoints(5)
        }
        else
            setPoints(points - 5)
    }

    if(exercises.length == 0)
        return(<></>)
    return(<>
        <BlockContainer>
            <BlockHeader>VETERINARY</BlockHeader>
            <ContentContainer>
                <ProfileStats points={points} category={exercises[exercises.length - 1].categories[0]}/>
                <Question exercise={exercises[exercises.length - 1]} setAnswer={setIsAnswered} isAnswered={isAnswered} handlePoints={handlePoints}/>
                <Answer nextQuestion={handleNextQuestion} isAnswered={isAnswered} description={exercises[exercises.length - 1].description} reference={exercises[exercises.length - 1].reference}/>
            </ContentContainer>
        </BlockContainer>
    </>)
}