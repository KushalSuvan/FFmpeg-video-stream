import "./SignUpBar.css";

const SignUpBar = () => {
  return (
    <>
      <div className="signup-form-container">
        <form
          className="signup-form"
          aria-label="Sign up or restart your membership with Netflix"
          method="post"
        >
          <h3 className="signup-form-heading">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div
            className="signup-form-main"
            data-hasmessage="false"
            data-issplitform="false"
          >
            <div className="signup-input-block">
              <label className="signup-label">Email address</label>
              <div className="signup-input-container">
                <input
                  className="signup-input"
                  autoComplete="email"
                  type="email"
                  minLength="5"
                  maxLength="50"
                />
              </div>
            </div>
            <button className="signup-input-btn">Get Started</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpBar;
