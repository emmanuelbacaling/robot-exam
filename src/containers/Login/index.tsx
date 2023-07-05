import { AccountCircle, Fingerprint } from "@mui/icons-material"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const Login = (props: any) => {
  const { setIsLoggedIn } = props
  const [username, setUsername] = useState<String>("")
  const [password, setPassword] = useState<String>("")
  const [showError, setShowError] = useState<boolean>(false)

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("robot-exam-login")
    if (getLocalStorage === "true") {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })

  const onLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("robot-exam-login", "true")
      setIsLoggedIn(true)
    } else {
      setShowError(true)
    }
  }

  return (
    <Container
      sx={{
        width: 500,
        height: 300,
        margin: "auto",
        paddingTop: 30,
      }}
    >
      <h1>Welcome to the Robot List exam</h1>
      <p>
        <i>
          Please enter <b>admin</b> for both "Username" and "Password"
        </i>
      </p>
      {showError && (
        <Typography color="error">
          Username and password doesn't match please see the message above,
          thank you
        </Typography>
      )}
      <div>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", padding: "10px 0px" }}
        >
          <AccountCircle sx={{ padding: "0px 10px" }} />
          <TextField
            variant="standard"
            label="Username"
            fullWidth
            size="medium"
            onChange={(e) => {
              setUsername(e.target.value)
              setShowError(false)
            }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", padding: "10px 0px" }}
        >
          <Fingerprint sx={{ padding: "0px 10px" }} />
          <TextField
            type="password"
            variant="standard"
            label="Password"
            fullWidth
            size="medium"
            onChange={(e) => {
              setPassword(e.target.value)
              setShowError(false)
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "10px 0px",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", textAlign: "left" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "95%" }}
              onClick={() => onLogin()}
            >
              Login
            </Button>
          </div>
          <div style={{ width: "50%", textAlign: "right" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "95%" }}
              onClick={() => {
                window.history.back()
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </div>
    </Container>
  )
}

export default Login
