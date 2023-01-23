import styled from "styled-components";

const Input = styled.input`
    background-color: white;
    border: solid 0.052vw #707070;
    font-size: 1.042vw;
    color: #707070;
    font-family: "Lao Sangam MN";
    border-radius: 1.563vw;
    width: 100%;
    text-align: center;
    padding: 0.521vw;

    &::placeholder {
        color: #ACACAC;
    }
`

export const TextInput = ({ label, onChange }) => {
    return(
        <div>
            <Input onChange={onChange} type="text" id={label} name={label}  placeholder={label.toUpperCase()}/>
        </div>
    )
}