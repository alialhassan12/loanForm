import { useContext } from "react";
import { formInputs } from "./contexts/formInputContext";

export default function Inputs(){
    const formContext=useContext(formInputs);
    return(
        <>
        <label >{formContext.labelName}</label>
        <input type="text" value={formContext.value} 
            onChange={e=>{
                formContext.handleChange(e.target.value);
            }}
        />
        </>
    );
}