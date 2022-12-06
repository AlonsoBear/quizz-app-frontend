import styled from "styled-components";
import { BlockHeader,
         Button,
         Text,
         Category } from "../basic"; 
import { useEffect, useState } from "react";
import axios from "axios";

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

const CategoriesList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 25px 45px;
    margin-top: 35px;
`

export const Categories = ({ categories, setChosenCategories }) => {
    let chosenCategories = []

    const handleCategories = (val) => {
        if(chosenCategories.includes(val)) {
            const newCategories = chosenCategories.filter(category => category !== val)
            chosenCategories = newCategories
            // console.log(chosenCategories)
            // setChosenCategories(newCategories)
        } else {
            chosenCategories.push(val)
            // console.log(chosenCategories)
            // setChosenCategories(newCategories)
        }

    }

    const handleSubmitCategories = () => {
        console.log(chosenCategories)
        setChosenCategories(chosenCategories)
    }

    return(<>
        <BlockContainer>
            <BlockHeader>VETERINARY</BlockHeader>
            <TextContainer>
                <Text>You can choose among this categories</Text>
                <Text fontSize={20}>If you do not choose any, you <br/>will be asked</Text>
                <CategoriesList>
                    { categories.map((category) => {
                        return <Category key={category} onClick={() => handleCategories(category)}>{category.toUpperCase()}</Category>
                    })}
                </CategoriesList>
                <Button onClick={handleSubmitCategories}>Ask Me Anything</Button>
            </TextContainer>
        </BlockContainer>
    </>)
}