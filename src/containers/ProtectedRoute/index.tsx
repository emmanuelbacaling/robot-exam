import { useState } from "react"

const ProtectedRoute = () => {
  const [counter, setCounter] = useState<number>(5)
  console.log(localStorage.getItem("robot-login-data"))

  if (!localStorage.getItem("robot-login-data")) {
    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }

  if (counter < 1) {
    // window.location.href = "https://www.facebook.com"
  }

  return (
    <h1>
      You are not authorize to acceess this page, you will be redirected in{" "}
      {counter} seconds
    </h1>
  )
}

export default ProtectedRoute
