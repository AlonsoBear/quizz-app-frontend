import { useState, useEffect } from "react";
import styled from "styled-components";
import { Categories, WelcomeWindow } from "./";
import axios from "axios";

const QuizContainer = styled.div`
`

export const Quiz = ({ children, onClick }) => {
    const [chosenCategories, setChosenCategories] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const response = axios({
            method: 'get',
            url: "http://localhost:5000/exercises/topics",
            responseType: "json"
        }).then(response => {
            setCategories(response.data.data[0].categories)
        })
    }, [])

    useEffect(() => {
        console.log(chosenCategories)
    }, [chosenCategories])

    return(<>
        { chosenCategories.length > 0 ?
            <WelcomeWindow/> :
            <Categories 
                categories={categories}
                setChosenCategories={setChosenCategories} 
            />
        }
    </>
    )
}