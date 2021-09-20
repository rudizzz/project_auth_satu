const Register = () => {
  return (
    <form action="">
      <div className="form-wrapper">
        <h1>Register</h1>
        <input
          className="form"
          type="text"
          name="Username"
          placeholder="Username"
          required
        />
        <input
          className="form"
          type="text"
          name="Email"
          placeholder="Email"
          required
        />
        <input
          className="form"
          type="text"
          name="Password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit"> Register </button>
    </form>
  );
};

export default Register;
