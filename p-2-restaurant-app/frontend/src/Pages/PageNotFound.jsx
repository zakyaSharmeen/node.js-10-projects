import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
       <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for</p>
          <Link to={"/"}>
            Back to Home
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound