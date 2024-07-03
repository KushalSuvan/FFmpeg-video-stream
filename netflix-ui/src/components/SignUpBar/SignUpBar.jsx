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
        </form>
      </div>
    </>
  );
};

export default SignUpBar;
