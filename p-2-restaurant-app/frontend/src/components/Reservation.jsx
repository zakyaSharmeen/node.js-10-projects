import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


import { useNavigate } from "react-router-dom";


function Reservation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate();

    const showSuccessToast = () => {
        Toastify({
          text: "Success! Your action was completed.",
          duration: 3000, 
          close: true, 
          gravity: "right", 
          position: "right", 
          backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", 
        }).showToast();
      };
    
      const showErrorToast = () => {
        Toastify({
          text: "Error! Something went wrong.",
          duration: 3000,
          close: true,
          gravity: "right",
          position: "right",
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)", 
          
        }).showToast();
      };
    


    const handleReservation = async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8000/api/v1/reservation/send",
                {firstName, lastName, email, phone, date, time},
                {
                    headers:{
                        "Content-Type": "application/json"
                    }, 
                    withCredentials: true
                }
            )
            showSuccessToast()
            // toast.success("Reservation successful!", data);
            setFirstName("")
            setLastName("")
            setEmail("")
            setDate("")
            setTime("")
            setPhone(0)
            navigate("/success")

        }catch(err){
            // console.log(err);
            showErrorToast(err)
            // toast.error(err)
          
            
        }
    }


  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit"  onClick={handleReservation}>
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation