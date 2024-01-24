import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"
import { useState } from "react";

function App() {
  function changeHandler(fieldName,event)
    {
        updateFieldName((prevData)=>{
          console.log(prevData);
          return{...prevData,[fieldName]:+event.target.value}
        })
    }
  const [fieldName,updateFieldName]=useState({
    initialInvestment:1200,
    annualInvestment:15000,
    expectedReturn:1000,
    duration:0
    });

    const inputCondition=fieldName.duration>0;
  return (
    <>
    <Header/>
    <UserInput func={changeHandler}/>
    {!inputCondition && <p className="center">Please enter valid year greater then 0</p>}
    {inputCondition && <Result render={fieldName}/>} 
  </>
  )
  
}
export default App
