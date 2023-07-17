import React from "react";

const SignupButtons = () => {
  return (
    <div className="signup-buttons">
      <p>
        Already have an account? <a href="#">Sign in</a>
      </p>
      <div className="button-group">
        <button className="signup-button">Sign up with your email</button>
        <button className="signup-button">Sign up with Google</button>
      </div>
    </div>
  );
};

export default SignupButtons;
