import PopUp from './PopUp';
import {useState,useContext} from 'react';
import TextInputContainer from './TextInputContainer';
import {formInputs} from './contexts/formInputContext';
import { userContext } from './contexts/userContext';

export default function Form(){
    const userData=useContext(userContext);
    const [popUp,setPopup]=useState({isVisible:false,message:""});
    const [formFilds,setFormFields]=useState({
        name:userData.name,
        phoneNumber:userData.phoneNumber,
        age:userData.age,
        isEmployeed:false,
        salary:"500"
    });

    function handleNameTextChange(value){
        setFormFields({...formFilds,name:value});
    }
    function handlePhoneNumberTextChange(value){
        setFormFields({...formFilds,phoneNumber:value});
    }
    function handleAgeTextChange(value){
        setFormFields({...formFilds,age:value});
    }

    return(
        <div onClick={()=>{
            if(popUp){
                setPopup({...popUp,isVisible:false});
            }
        }}>
        <h1 className="formTitle">Requisting A Loan</h1>
        <hr />
        <h2>Hello {userData.name}</h2>
        <hr />
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(formFilds);
            let message=inputValidation();
            setPopup({isVisible:true,message:message});
        }}>
            <formInputs.Provider
            value={{
                labelName:"name:",
                handleChange:handleNameTextChange,
                value:formFilds.name,
            }}>
                <TextInputContainer />
            </formInputs.Provider>

            <formInputs.Provider value={{
                labelName:"Phone Number:",
                value:formFilds.phoneNumber,
                handleChange:handlePhoneNumberTextChange,
            }}>
                <TextInputContainer />
            </formInputs.Provider>

            <formInputs.Provider value={{
                labelName:"Age:",
                value:formFilds.age,
                handleChange:handleAgeTextChange,
            }}>
                <TextInputContainer />
            </formInputs.Provider>

            <label >Are you employeed?</label>
            <input className="checkBox" type="checkbox" checked={formFilds.isEmployeed}
            onChange={e=>{
                setFormFields({...formFilds,isEmployeed:e.target.checked});
            }}/>

            <label >Salary:</label>
            <select value={formFilds.salary} onChange={e=>{setFormFields({...formFilds,salary:e.target.value})}}>
                <option value="500">500$</option>
                <option value="500>">below 500$</option>
                <option value="500<">above 500$</option>
            </select>

            <button className="submitBtn" disabled={handleBtn()}>Submit</button>
        </form>
        <PopUp message={popUp.message} isVisible={popUp.isVisible}></PopUp> 
        </div>
    );

    function handleBtn(){
        return !(formFilds.name !== "" && formFilds.phoneNumber !== "" && formFilds.age !== "");
    }
    function inputValidation(){
        if(formFilds.name.length <3){
            return "Name must be greater than 3 characters";
        }
        if(isNaN(Number(formFilds.phoneNumber))){
            return "only numbers in phoneNumber";
        }
        if(formFilds.phoneNumber.length<7){
            return "please enter valid phone number";
        }
        if(isNaN(Number(formFilds.age))){
            return "please enter valid age number";
        }
        if(Number(formFilds.age)>=100 || Number(formFilds.age)<18){
            return "rejected age";
        }
        return null;
    }
}