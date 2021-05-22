
import { useState } from 'react';
import './App.css';
import { SignUp } from "./screens/SignUp"
import { registerUser } from "./services/auth"
import { useHistory } from "react-router-dom"

// import {loginUser,registerUser,verifyUser,removeToken} from "./services/auth"

function App() {
const [currentUser,setCurrentUser] = useState <null | object>(null)
const [error, setError] = useState<null | object>(null)
const history = useHistory()

  const handleRegister = async (formData:object) => {
    try {
      const userData = await registerUser(formData)
      setCurrentUser(userData)
      setError(null)
      history.push("/")
    } catch (e) {
      setError(e.response.data)
  }
}
  return (
    <div className="App">
    <SignUp handleRegister={handleRegister}></SignUp>
    </div>
  );
}

export default App;
