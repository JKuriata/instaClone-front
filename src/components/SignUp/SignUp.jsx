import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      <button>Sign Up</button>
        <div className="oldUser">
            <p>Already have an account?</p>
            <button>Sign In</button>
        </div>
    </div>
  );
};

export default SignUp;
