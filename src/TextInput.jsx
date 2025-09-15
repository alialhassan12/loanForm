export default function TextInput({labelName,value,handleChange}){
    return(
        <>
            <label >{labelName}</label>
            <input type="text" value={value} 
                onChange={e=>{
                    handleChange(e.target.value);
                }}
            />
        </>
    );
}