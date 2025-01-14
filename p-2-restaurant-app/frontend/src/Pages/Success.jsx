import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

function Success() {
  const [countdown, setCountdown] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    // to decrese the count
    const timeoutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId); // Clearing when reaches 1
          navigate("/"); 
        }
        return prevCount - 1; // Decrase the countdown
      });
    }, 1000);

    // clean up
    return () => clearInterval(timeoutId);
  }, [navigate]); // Dependency on navigate to ensure it's up-to-date


  return (
    <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home {countdown} in  seconds...</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
  )
}

export default Success