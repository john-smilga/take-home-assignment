import React from "react"
import styled from "styled-components"
import { useGlobalContext } from "../context"
import Image from "gatsby-image"
import { FaTimes } from "react-icons/fa"
const Modal = () => {
  const {
    modal: { isOpen, image, desc, url },
    closeModal,
  } = useGlobalContext()

  return (
    <Wrapper>
      <div className={`${isOpen ? "modal-wrapper isOpen" : "modal-wrapper"}`}>
        <div className="modal-content">
          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
          {image && <Image fixed={image} />}
          <p className="desc">{desc || "content goes here"}</p>
          <a href={url}>
            Learn more : <span>{url}</span>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.75);
    pointer-events: none;
    opacity: 0;
    transition: var(--transition);
  }
  .isOpen {
    opacity: 1;
    z-index: 999;
    pointer-events: auto;
  }
  .modal-content {
    background: var(--clr-blue-light);
    width: 90vw;
    max-width: var(--fixed-width);
    color: var(--clr-white);
    border-radius: --(radius);
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    border-radius: var(--radius);

    .desc {
      margin-top: 4rem;
    }
    a {
      color: var(--clr-white);
    }
    a span {
      color: var(--clr-yellow);
    }
    .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border-color: transparent;
      font-size: 1.2rem;
      color: var(--clr-white);
      cursor: pointer;
    }
  }
`

export default Modal
