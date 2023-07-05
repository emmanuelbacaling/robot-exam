import {
  Container,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Box,
} from "@mui/material"
import { useEffect, useState } from "react"
import DynamicDialog from "../../components/DynamicDialog"
import { AddCircleOutlined } from "@mui/icons-material"

export interface RoboData {
  name: String
  purpose: String
  title?: String
  image: String
  index?: number
}

const RoboList = (props: any) => {
  const { isLoggedIn, setIsLoggedIn } = props

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("robot-exam-login")
    if (getLocalStorage === "true") {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  })

  const [openDialog, setOpenDialog] = useState(false)
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false)

  const [isEdit, setIsEdit] = useState(false)
  const [editDeleteData, setEditDeleteData] = useState<RoboData>({
    name: "",
    purpose: "",
    title: "",
    image: "",
    index: 0,
  })

  const [robotData, setRobotData] = useState<Array<RoboData>>([
    {
      name: "Luna",
      purpose: "the moon rider",
      title: "Luna",
      image: "https://api.dicebear.com/6.x/bottts/png?seed=Luna?mouth=smile02",
    },
    {
      name: "Gradus",
      purpose: "The galaxy warrior",
      title: "Gradus",
      image:
        "https://api.dicebear.com/6.x/bottts/png?seed=Gradus?mouth=smile02",
    },
    {
      name: "Space Invader",
      purpose: "The conqueror of galaxy",
      title: "I am robot 1",
      image:
        "https://api.dicebear.com/6.x/bottts/png?seed=space-invader?mouth=smile02",
    },
    {
      name: "Space Impact",
      purpose: "Feared by many",
      title: "I am robot 1",
      image:
        "https://api.dicebear.com/6.x/bottts/png?seed=space-impact?mouth=smile02",
    },
    {
      name: "Battle Tank",
      purpose: "Diamonds can't even break",
      title: "Battle Tank",
      image:
        "https://api.dicebear.com/6.x/bottts/png?seed=battle-tank-red?mouth=smile02",
    },
  ])

  const onDelete = async (robot: any) => {
    console.log(robotData.splice(robot.index, 1))
    setOpenConfirmationDialog(false)
  }
  return (
    <>
      <AppBar sx={{ padding: "5px 0px" }}>
        <Box sx={{ display: "flex" }}>
          <div style={{ width: "30%", textAlign: "left", paddingLeft: 10 }}>
            <Typography variant="h6" component="div">
              Robot List Exam
            </Typography>
          </div>
          <div style={{ width: "70%", textAlign: "right" }}>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("robot-exam-login")
                setIsLoggedIn(false)
              }}
            >
              Logout
            </Button>
          </div>
        </Box>
      </AppBar>
      <Container sx={{ padding: "60px 0px 0px 0px" }}>
        {isLoggedIn ? (
          <>
            <Dialog open={openConfirmationDialog}>
              <DialogContent>
                Are you sure you want to delete robot{" "}
                <b>{editDeleteData.name}</b>{" "}
                <b>
                  <i>{editDeleteData.purpose}</i>
                </b>
              </DialogContent>
              <DialogActions>
                <Box sx={{ display: "flex", width: "100%", paddingBottom: 2 }}>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <Button
                      sx={{ width: "85%" }}
                      variant="contained"
                      onClick={() => onDelete(editDeleteData)}
                    >
                      Yes
                    </Button>
                  </div>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <Button
                      sx={{ width: "85%" }}
                      variant="contained"
                      color="error"
                      onClick={() => setOpenConfirmationDialog(false)}
                    >
                      No
                    </Button>
                  </div>
                </Box>
              </DialogActions>
            </Dialog>
            <DynamicDialog
              data={editDeleteData}
              rData={robotData}
              isOpen={openDialog}
              setOpen={setOpenDialog}
              setRobotData={setRobotData}
              isEdit={isEdit}
            />
            <Button
              variant="contained"
              sx={{ margin: "0px 0px 30px 0px" }}
              onClick={() => {
                setOpenDialog(true)
                setIsEdit(false)
                setEditDeleteData({
                  name: "",
                  purpose: "",
                  title: "",
                  image: "",
                  index: 0,
                })
              }}
            >
              <AddCircleOutlined sx={{ paddingRight: 1 }} />
              Add Robot
            </Button>
            <Grid container spacing={2}>
              {robotData.map((e, k) => {
                return (
                  <Grid item xs={4} key={k}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140, width: 140, margin: "auto" }}
                        image={`${e.image}`}
                        title={`${e.title}`}
                        component="img"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {e.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {e.purpose}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ display: "block" }}>
                        <Button
                          variant="contained"
                          sx={{ width: "30%" }}
                          onClick={() => {
                            setOpenDialog(true)
                            setEditDeleteData({ ...e, index: k })
                            setIsEdit(true)
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          sx={{ width: "30%" }}
                          onClick={() => {
                            setEditDeleteData({ ...e, index: k })
                            setOpenConfirmationDialog(true)
                          }}
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </>
        ) : (
          <h1>
            Sorry you are not authorized to access this content, please contact
            your administator
          </h1>
        )}
      </Container>
    </>
  )
}

export default RoboList
