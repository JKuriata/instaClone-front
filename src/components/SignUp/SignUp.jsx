import "./SignUp.css";
import { useState, } from "react";
import { signup } from "../../utils/fetch";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHander = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from handleSubmit");
    await signup(username, email, password);
  };
  return (
    <form className="signUp" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => changeHander(e, setUsername, username)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => changeHander(e, setEmail, email)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => changeHander(e, setPassword, password)}
      />
      <button type="submit">Sign Up</button>
      <div className="oldUser">
        <p>Already have an account?</p>
        <button handleClick>Sign In</button>
      </div>
    </form>
  );
};

export default SignUp;
