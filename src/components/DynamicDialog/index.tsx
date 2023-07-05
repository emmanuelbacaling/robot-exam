import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material"
import { useEffect, useState } from "react"

const DynamicDialog = (props: any) => {
  console.log({ props })
  const { rData, setRobotData, isOpen, setOpen, data, isEdit } = props
  const [payload, setPayload] = useState({
    name: "",
    title: "",
    purpose: "",
    image: "",
  })

  useEffect(() => {
    setPayload(data)
  }, [data, isOpen])

  const onAddRobot = () => {
    if (isEdit) {
      rData[data.index] = payload
      setRobotData(rData)
    } else {
      setRobotData([...rData, payload])
    }

    setOpen(false)
  }
  return (
    <Container>
      <Dialog open={isOpen} maxWidth="sm" fullWidth={true}>
        <DialogContent>
          <TextField
            sx={{ padding: "8px 0px" }}
            fullWidth
            variant="outlined"
            label="Name"
            id="name"
            value={payload.name}
            onChange={(e) => {
              setPayload({
                ...payload,
                name: e.target.value,
                title: e.target.value,
                image: `https://api.dicebear.com/6.x/bottts/png?seed=${e.target.value}?mouth=smile02`,
              })
            }}
          />
          <br />
          <TextField
            sx={{ padding: "8px 0px 0px 0px" }}
            fullWidth
            variant="outlined"
            label="Purpose"
            id="purpose"
            value={payload.purpose}
            onChange={(e) => {
              setPayload({
                ...payload,
                purpose: e.target.value,
              })
            }}
          />

          <br />
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", width: "100%", paddingBottom: 2 }}>
            <div style={{ width: "50%", textAlign: "center" }}>
              <Button
                sx={{
                  width: "85%",
                }}
                fullWidth
                variant="contained"
                type="submit"
                onClick={() => onAddRobot()}
              >
                {isEdit ? "Edit Robot" : "Add Robot"}
              </Button>
            </div>
            <div style={{ width: "50%", textAlign: "center" }}>
              <Button
                sx={{ width: "85%" }}
                onClick={() => setOpen(false)}
                variant="contained"
                color="secondary"
              >
                Close
              </Button>
            </div>
          </Box>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default DynamicDialog
