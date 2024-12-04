import React from "react";
import "../styles/Testimonials.css";
import userImage from "../assets/user.png";

const Testimonials = ({ speed = 50 }) => {
  const cards = [
    {
      id: 1,
      userImg: { userImage },
      userName: "User 1",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 2,
      userImg: { userImage },
      userName: "User 2",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 3,
      userImg: { userImage },
      userName: "User 3",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 4,
      userImg: { userImage },
      userName: "User 4",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 5,
      userImg: { userImage },
      userName: "User 5",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 6,
      userImg: { userImage },
      userName: "User 6",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <div className="marquee-container">
        <div className="marquee">
          <div
            className="marquee-track"
            style={{
              display: "flex",
              animation: `marquee ${speed}s linear infinite`,
            }}
          >
            {cards.map((card) => (
              <div key={card.id} className="card">
                <img src={card.userImg} />
                <h3>{card.userName}</h3>
                <p>{card.userMessage}</p>
              </div>
            ))}
            {/* Duplicate cards for seamless scrolling */}
            {cards.map((card) => (
              <div key={`clone-${card.id}`} className="card">
                <img src={card.userImg} />
                <h3>{card.userName}</h3>
                <p>{card.userMessage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
