const Login = () => {
  return (
    <form action="from-wrapper">
      <div className="form">
        <h1>login</h1>
        <input
          className="form"
          type="text"
          name="password"
          placeholder="Username"
          required
        />
        <input
          className="form"
          type="text"
          name="password"
          placeholder="Password"
          required
        />
        <button className="form" type="login">
          {" "}
          Login{" "}
        </button>
      </div>
    </form>
  );
};

export default Login;
