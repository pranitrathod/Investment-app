import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"


function App() {


  return (
    <>
    <Header/>
    <UserInput/>
    <Result render={<tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>}
    />
  </>
  )
}

export default App
