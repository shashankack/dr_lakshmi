import React from "react";

import avatar1 from "../assets/avatars/avatar-1.jpeg";
import avatar2 from "../assets/avatars/avatar-2.jpeg";
import avatar3 from "../assets/avatars/avatar-3.jpeg";
import avatar4 from "../assets/avatars/avatar-4.jpeg";
import avatar5 from "../assets/avatars/avatar-5.jpeg";
import avatar6 from "../assets/avatars/avatar-6.jpeg";

const Testimonials = ({ speed = 50 }) => {
  const cards = [
    {
      id: 1,
      userImg: avatar1,
      userName: "User 1",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 2,
      userImg: avatar2,
      userName: "User 2",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 3,
      userImg: avatar3,
      userName: "User 3",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 4,
      userImg: avatar4,
      userName: "User 4",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 5,
      userImg: avatar5,
      userName: "User 5",
      userMessage:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, culpa dignissimos.",
    },
    {
      id: 6,
      userImg: avatar6,
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
                <div className="avatar-background">
                  <img className="card-img" src={card.userImg} />
                </div>
                <h3>{card.userName}</h3>
                <p>{card.userMessage}</p>
              </div>
            ))}
            {/* Duplicate cards for seamless scrolling */}
            {cards.map((card) => (
              <div key={`clone-${card.id}`} className="card">
                <div className="avatar-background">
                  <img className="card-img" src={card.userImg} />
                </div>
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
