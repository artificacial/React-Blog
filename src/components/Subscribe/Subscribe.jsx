import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-box">
          <h2 className="title text-gray-400">Join to Our Community</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
          <form name="email-form" method="get" className="form">
            <input
              type="email"
              className="input-email"
              placeholder="Enter your email"
              required
            />
            <input type="submit" value="Subscribe" className="submit-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
