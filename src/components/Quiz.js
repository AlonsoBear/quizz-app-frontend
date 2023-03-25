import { useState, useEffect } from "react";
import styled from "styled-components";
import { Categories, Exercise } from "./";
import axios from "../axios/axios";

export const Quiz = ({ children, onClick }) => {
    const [chosenCategories, setChosenCategories] = useState([])
    const [categories, setCategories] = useState([])
    const [topic, setTopic] = useState(undefined)

    useEffect(() => {
        const response = axios
            .get("/exercises/topics")
            .then(response => {
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