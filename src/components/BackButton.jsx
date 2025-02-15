import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../styles/BackButton.scss";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <button
      ref={buttonRef}
      className="back-button"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft className="icon" /> Back
    </button>
  );
};

export default BackButton;
