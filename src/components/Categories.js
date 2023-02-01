import styled from "styled-components";
import { BlockHeader,
         Button,
         Text,
         Category } from "../basic"; 

const BlockContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 29.896vw;
    height: auto;
`

const TextContainer = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0.260vw 0.260vw 0.313vw rgba(0, 0, 0, 0.2);
    padding: 1.563vw;
    border-radius: 1.042vw;

    button:last-child{
        margin-top: 1.563vw;
    }
`

const CategoriesList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1.302vw 2.344vw;
    margin-top: 1.823vw;
`

export const Categories = ({ categories, setChosenCategories }) => {
    let chosenCategories = []

    const handleCategories = (val) => {
        if(chosenCategories.includes(val)) {
            const newCategories = chosenCategories.filter(category => category !== val)
            chosenCategories = newCategories
        } else {
            chosenCategories.push(val)
        }

    }

    const handleSubmitCategories = () => {
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