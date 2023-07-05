import {
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
      <Dialog open={isOpen}>
        <DialogContent>
          <TextField
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
          <Button
            variant="contained"
            type="submit"
            onClick={() => onAddRobot()}
          >
            {isEdit ? "Edit Robot" : "Add Robot"}
          </Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default DynamicDialog
