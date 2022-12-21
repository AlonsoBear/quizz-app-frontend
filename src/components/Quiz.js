import { useState, useEffect } from "react";
import styled from "styled-components";
import { Categories, Exercise } from "./";
import axios from "axios";

const QuizContainer = styled.div`
`

export const Quiz = ({ children, onClick }) => {
    const [chosenCategories, setChosenCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [topic, setTopic] = useState(undefined)

    useEffect(() => {
        console.log("Quiz");
        const response = axios({
            method: 'get',
            url: "http://localhost:5000/exercises/topics",
            responseType: "json"
        }).then(response => {
            const topic = response.data.data[0]
            setTopic(topic._id)
            setCategories(response.data.data[0].categories)
        })
    }, [])

    return(<>
        { chosenCategories.length > 0 ?
            <Exercise topicId={topic} categories={chosenCategories}/> :
            <Categories 
                categories={categories}
                setChosenCategories={setChosenCategories} 
            />
        }
    </>
    )
}