import React from "react";

const Error = () => {
  return (
    <>
      <section className="error-section">
        <div className="container">
          <div className="error-content">
            <h1>404!</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <a href ="/" className = "button1_error">
    <span></span>
     <span></span>
     <span></span>
     <span></span>
    Home Page</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;