import React from "react";
import "../styles/Page3.css";


const Page3 = () => {
  return (
    <section className="core-section">
      <div className="core-container">
        <div className="core-text">
          <h3>Core Value Propositions</h3>
          <p>
            Our core value propositions are the foundation of our business
            model. They are the key benefits that we offer to our customers.
            They are the reasons why customers choose us over our competitors.
            They are the promises that we make to our customers.{" "}
          </p>
          <div className="core-grid">
            <div className="core-grid-item">
              <h4>Value Proposition 1</h4>
              <p>
                Our first value proposition is to provide high-quality products
                at affordable prices.
              </p>
            </div>

            <div className="core-grid-item">
              <h4>Value Proposition 2</h4>
              <p>
                Our second value proposition is to provide excellent customer
                service.
              </p>
            </div>

            <div className="core-grid-item">
              <h4>Value Proposition 3</h4>
              <p>
                Our third value proposition is to provide fast and reliable
                delivery.
              </p>
            </div>
            <div className="core-grid-item">
              <h4>Value Proposition 4</h4>
              <p>
                Our fourth value proposition is to provide fast and reliable
                delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="core-image">
          <img src="https://placehold.co/400x600" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Page3;
