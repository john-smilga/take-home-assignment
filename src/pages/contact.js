import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
const Contact = () => {
  const [isComplete, setIsComplete] = useState(false)
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [isError, setIsError] = useState(false)
  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    setPerson({ ...person, [field]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (person.firstName && person.lastName && person.email && person.phone) {
      setIsComplete(true)
    } else {
      setIsError(true)
    }
  }
  return (
    <Layout>
      <Wrapper>
        {isComplete ? (
          <h2>thank you !</h2>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>contact us</h2>
            {/* input */}
            <div class="form-control">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstName"
                class="form-input"
                placeholder="enter your first name"
                value={person.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            {/* end of input */}
            {/* input */}
            <div class="form-control">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                id="lastName"
                class="form-input"
                placeholder="enter your last name"
                value={person.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
            {/* end of input */}
            {/* input */}
            <div class="form-control">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                class="form-input"
                placeholder="enter your email"
                value={person.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            {/* end of input */}
            {/* input */}
            <div class="form-control">
              <label htmlFor="phone">phone</label>

              <input
                type="tel"
                id="phone"
                class="form-input"
                placeholder="enter your phone"
                value={person.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            {/* end of input */}
            {isError && <p className="error">please fill out all fields </p>}
            <button type="submit" className="submit-btn">
              submit
            </button>
          </form>
        )}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-form {
    background: var(--clr-white);
    padding: 2.5rem;
    border-radius: var(--radius);
    width: 90vw;
    max-width: 700px;
  }
  .contact-form h2 {
    margin-bottom: 2rem;
    font-weight: 500;
    text-align: center;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  .form-control label {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .form-input {
    border: 1px solid var(--clr-grey-9);
    border-radius: var(--radius);
    padding: 1.25rem;
    width: 100%;
    color: var(--clr-grey-3);
    font-size: 1rem;
  }
  .form-input::placeholder {
    color: var(--clr-grey-5);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-blue-dark);
    margin-top: 3rem;
    display: block;
    width: 100%;
    color: var(--clr-white);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 1.25rem 0;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
  }
  .error {
    text-transform: capitalize;
    color: red;
  }
`

export default Contact
