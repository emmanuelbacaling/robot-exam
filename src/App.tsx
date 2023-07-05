// import React from "react"
import { useState } from "react"
import "./App.css"
// import ProtectedRoute from "./containers/ProtectedRoute"
import RoboList from "./containers/List"
import Login from "./containers/Login"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {isLoggedIn ? (
        <RoboList setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
      {/* </header> */}
    </div>
  )
}

export default App
