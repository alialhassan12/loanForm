export default function PopUp({message=null,isVisible}){
    if(isVisible){
        return(
            <div id="popUp" >
                <div className="popUpContent">
                    <h1 style={{color:message?"red":"green"}}>{message !== null?message:"Submitted Successfully!"}</h1>
                </div>
            </div>
        );
    }else{
        return <></>
    }
}