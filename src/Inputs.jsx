import { useContext } from "react";
import { formInputs } from "./contexts/formInputContext";
import { userContext } from "./contexts/userContext";

export default function Inputs(){
    const formContext=useContext(formInputs);
    const userData=useContext(userContext);
    return(
        <>
        <label >{userData.userName}'s {formContext.labelName}</label>
        <input type="text" value={formContext.value} 
            onChange={e=>{
                formContext.handleChange(e.target.value);
            }}
        />
        </>
    );
}