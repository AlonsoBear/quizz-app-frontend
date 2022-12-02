import styled from "styled-components";

const Input = styled.input`
    background-color: white;
    border: solid 1px #707070;
    font-size: 20px;
    color: #707070;
    font-family: "Lao Sangam MN";
    border-radius: 30px;
    width: 100%;
    text-align: center;
    padding: 10px;

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