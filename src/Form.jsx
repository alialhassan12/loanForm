import {useState} from 'react';

export default function Form(){
    const [formFilds,setFormFields]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployeed:false,
        salary:"500"
    })
    return(
        <>
        <h1 className="formTitle">Requisting A Loan</h1>
        <hr />
        <form action="" onSubmit={(e)=>{e.preventDefault();}}>

            <label >Name:</label>
            <input type="text" value={formFilds.name} 
            onChange={e=>{
                setFormFields({...formFilds,name:e.target.value});
            }}/>

            <label >Phone Number:</label>
            <input type="text" value={formFilds.phoneNumber}
            onChange={e=>{
                setFormFields({...formFilds,phoneNumber:e.target.value});
            }}/>

            <label >Age:</label>
            <input type="text" value={formFilds.age}
            onChange={e=>{
                setFormFields({...formFilds,age:e.target.value});
            }}/>

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
            {console.log(formFilds.salary)}

            <button className="submitBtn" disabled={handleBtn()}>Submit</button>
        </form>
        </>
    );

    function handleBtn(){
        return !(formFilds.name !== "" && formFilds.phoneNumber !== "" && formFilds.age !== "");
    }
}