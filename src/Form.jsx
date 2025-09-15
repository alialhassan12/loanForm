import PopUp from './PopUp';
import {useState} from 'react';
import TextInput from './TextInput';

export default function Form(){
    const [popUp,setPopup]=useState({isVisible:false,message:""});
    const [formFilds,setFormFields]=useState({
        name:"",
        phoneNumber:"",
        age:"",
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
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(formFilds);
            let message=inputValidation();
            setPopup({isVisible:true,message:message});
        }}>
            <TextInput 
                labelName="Name:"
                value={formFilds.name} 
                handleChange={handleNameTextChange}
            />

            <TextInput 
                labelName="Phone Number:"
                value={formFilds.phoneNumber} 
                handleChange={handlePhoneNumberTextChange}
            />

            <TextInput 
                labelName="Age:"
                value={formFilds.age} 
                handleChange={handleAgeTextChange}
            />

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