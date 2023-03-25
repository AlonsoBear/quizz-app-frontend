import { useState, useEffect } from "react";
import { BlockHeader, TextInput } from "../basic";
import styled from "styled-components";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90%;
    height: 90%;
`

const ExerciseListConstainer = styled.div`
    width: 100%;
    height: 85%;
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

const QuestionContainer = styled.div`
    width: 100%;
    padding: 1.563vw;
    border-radius: 1.042vw;
    
    &:hover {
        background-color: #F2F2F2;
        cursor: pointer;
        border-bottom: border-bottom: 0.104vw solid #F2F2F2;
    }

`

export const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleQuestion = (id) => {
    const path = '/ardilla/' + id;
    console.log(path)
    navigate(path);
  }

  const handleSearch = (search) => {
    setSearch(search)
    axios.post("/exercises/filter", { question: search })
    .then((response) => {
      setExercises(response.data.data);
    });
  }
    
  return (
    <BlockContainer>
      <BlockHeader>Exercise List</BlockHeader>
      <ExerciseListConstainer>
        <TextInput label="Search" onChange={(e) => handleSearch(e.target.value)}/>
        <ol>
          {exercises.map((exercise) => {
            console.log(exercise._id)
            return (
              <QuestionContainer onClick={() => handleQuestion(exercise._id)}>
                <li>{exercise.question}</li>
              </QuestionContainer>
            );
          })}
        </ol>
      </ExerciseListConstainer>
    </BlockContainer>
  );
}
