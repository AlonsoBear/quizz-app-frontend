import styled from "styled-components";

const Input = styled.input`
    background-color: white;
    border: solid 0.052vw #707070;
    font-size: .8vw;
    color: #707070;
    font-family: "Lao Sangam MN";
    border-radius: .5vw;
    width: 100%;
    padding: 0.521vw;

    &::placeholder {
        color: #ACACAC;
    }
`

const TextInput = styled.textarea`
    background-color: white;
    border: solid 0.052vw #707070;
    font-size: .8vw;
    color: #707070;
    font-family: "Lao Sangam MN";
    border-radius: .5vw;
    width: 100%;
    height: 5vw;
    padding: 0.521vw;
    overflow-x: hidden;
    overflow-y: scroll;

    &::placeholder {
        color: #ACACAC;
    }
`

export const DashboardInput = ({ label, onChange, type, value }) => {
    return(
        <div>
            {
                type === "text-area" ?
                <TextInput value={value} onChange={onChange} id={label} name={label} placeholder={label.toUpperCase()}/> :
                <Input value={value} onChange={onChange} type="text" id={label} name={label}  placeholder={label.toUpperCase()}/> 
            }
        </div>
    )
}