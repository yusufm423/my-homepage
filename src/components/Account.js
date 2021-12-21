import React, { useEffect, useContext, useState } from "react";
import studentContext from "../Reducers/studentContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import Image from "./NT.jpeg";
import { Typography, Button } from "@material-ui/core";
import * as ReactBootStrap from "react-bootstrap";
import { MenuList, MenuItem } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Collapse } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getImage} from "../api/index.js"
toast.configure();

let socket;
export default function AccountPage(props) {
  const dispatch = useDispatch();
  const context = useContext(studentContext);
  useEffect(() => {
    socket = io("localhost:5000");
    if (localStorage.getItem("token") && context?.student?.email) {
      socket.emit("addUser", `${context?.student?.email}re`);
    }
  }, [context?.student?.email]);

  useEffect(() =>
    socket.on(
      "recieve",
      (data) => dispatch({ type: "editNotifications", payload: data }),
      []
    )
  );
  // console.log(context)

  const [Note, setNote] = useState(false);
  const [Pays, setPay] = useState(false);
  //   const { deleteNote } = context;

  const { student, getDetailsStudent } = context;
  // console.log(context)

  const[days,setDays] = useState(student?.Fees?.DaysRemain)

  useEffect(()=>setDays(student?.Fees?.DaysRemain),[student])

  const { notifications ,image} = useSelector((state) => {
    return state;
  });
  // console.log(async()=> await notifications.reverse())
  // console.log(notifications);

  useEffect(() => {
    if (student.Notifications && !notifications.length)
      dispatch({ payload: student.Notifications, type: "getNotifications" });
  }, [student.Notifications]);
  // console.log(notifications)
  
  let history = useHistory();
  
  if (localStorage.getItem("isadmin") === "true") {
    history.push("/");
  }
  useEffect(async() => {
    if (localStorage.getItem("token")) {
      getDetailsStudent();
    }
    // eslint-disable-next-line
  }, []);
  useEffect(async() => {
      if(student.email)
     { 
       const {data} =await getImage(student.email)
        dispatch({type:"getImage",payload:data})
    }
  }, [student]);

  const handle = async (token, addresses) => {
    // console.log(token);
    const response = await axios.post("http://localhost:5000/checkout", {
      token,
      price: 1500,
    });
    const { status } = response.data;
    // console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check the days", { type: "success" });
      setDays(days+30)
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  const [acc, setAcc] = useState(false);
  return (
    <>
      <div
        className="card mb-3"
        style={{
          borderRadius: "15px",
          backgroundColor: "rgb(255,255,255,0.5)",
          marginBottom: "5vh",
        }}
      >
        <div className="card-body" style={{ display: "inline-flex" }}>
          <Avatar
            src={image}
            style={{ height: "15vw", width: "15vw", marginRight: "2vw" }}
          />
          <div>
            <Typography variant="h4">{student.name}</Typography>

            <Typography variant="h6">{student.course_name}</Typography>
            <Typography variant="subtitle1">
              {student.course_year} year, Room no.{student.room_no} ,
              {student.hostel_name}{" "}
            </Typography>
            <div style={{ display: "inline-flex", margin: "2px" }}>
              <ContactPhoneIcon style={{ marginRight: "1vw" }} />
              <Typography variant="body1">{student.phone_no}</Typography>
            </div>
            <div>
              <Link to="/editprofile" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: "2vh" }}
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{marginLeft:"2vw"}}>
       
        </div>
      </div>

      <div
        className="card mb-3"
        style={{
          borderRadius: "15px",
          backgroundColor: "rgb(255,255,255,0.5)",
        }}
      >
        <div className="card-body" style={{ display: "block" }}>
          <div
            className="card-header bg-transparent"
            style={{ borderBottom: "1px groove" }}
          >
            <Typography variant="h4">Facilities</Typography>
          </div>
          <MenuList>
            <MenuItem onClick={() => setAcc(!acc)}>
              <AccountBalanceWalletIcon style={{ marginRight: "2vw" }} />
              <Typography variant="h6">Account</Typography>
            </MenuItem>
            <Collapse in={acc}>
            <ReactBootStrap.Table stripped bordered hover>
              <thead>
                <tr>
                  {/* <td>SNo.</td> */}
                  <td>Name</td> 
                  <td>Room No</td>
                  <td>Dining Status</td>
                  <td>Remaining days</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{index}</td> */}
                  <td>{student.name}</td>
                  <td>{student.room_no}</td>
                  <td>{student.dining_status}</td>
                  <td>{days}</td>
                </tr>
              </tbody>
              </ReactBootStrap.Table>
            </Collapse>
            <MenuItem
              onClick={() => {
                setPay(!Pays);
                // console.log(Pays);
              }}
            >
              <PaymentIcon style={{ marginRight: "2vw" }} />
              <Typography variant="h6">Payment</Typography>
            </MenuItem>
            <Collapse in={Pays} style={{ paddingLeft: "2vw" }}>
              <StripeCheckout
                stripeKey="pk_test_51K9298SG0L5n931fAvrz66kEHbEdRwjuB9QpQy5zepOk5Otz98By7RlPYVxTaYM6SO1smgZFbg5VaVbfcW1nZ0RJ006unhbEbo"
                token={handle}
                name="Tesla Roadster"
              />
              <Typography color="secondary" style={{margin:"5px"}}>
               Note: An Amount of 1500 Rupees will be deducted for payment of future 30 days
              </Typography>
            </Collapse>
            <Link
              to="/roomorder"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>
                <RoomServiceIcon style={{ marginRight: "2vw" }} />
                <Typography variant="h6">Room Service</Typography>
              </MenuItem>
            </Link>
            <Link
              to="/stop"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>
                <ToggleOnIcon style={{ marginRight: "2vw" }} />
                <Typography variant="h6">Close Dining Account</Typography>
              </MenuItem>
            </Link>
            <MenuItem onClick={() => setNote(!Note)}>
              <NotificationsIcon style={{ marginRight: "2vw" }} />
              <Typography variant="h6">Notifications</Typography>
            </MenuItem>
            <Collapse in={Note}>
              <div
                style={{
                  marginLeft: "15px",
                  backgroundColor: "rgb(255,255,255,0.5)",
                  borderRadius: "7px",
                }}
              >
                {notifications
                  ?.slice(0)
                  .reverse()
                  ?.map((room) => (
                    <div
                      style={{
                        display: "block",
                        borderBottom: "1px solid  #282828",
                        padding: "5px",
                      }}
                    >
                      <Grid container direction="row">
                        <Grid item xs={12}>
                          <div
                            style={{
                              color: "green",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Typography variant="body1">
                              {moment(room?.date).fromNow()}
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Typography variant="h6">{room?.text}</Typography>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
              </div>
            </Collapse>
          </MenuList>
          {/* <Stop></Stop> */}
        </div>
      </div>
    </>
  );
}
