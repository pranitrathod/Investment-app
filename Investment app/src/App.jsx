import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"
import { useState } from "react";


function App() {

  const [arr,updatedArr]=useState({});
  function change(result)
  {
    updatedArr(result);
  }
  // console.log("FROM APP-",value); */
  return (
    <>
    <Header/>
    <UserInput change1={change}/>
    <Result render={1}/>
  </>
  )
  
}
export default App
