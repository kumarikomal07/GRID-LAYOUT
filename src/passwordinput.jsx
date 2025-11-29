import {useState} from 'react';
const PasswordInput=()=>{
    const[showPassword,setshowPassword]=useState(false)
    return(
        <>
        <input type={showPassword ? "text":"password"} 
          placeholder="Enter password"/>
        <button onClick={()=>setshowPassword(!showPassword)}>
            {showPassword?"hide":"Show"}</button>
        </>
    )
}
export default PasswordInput