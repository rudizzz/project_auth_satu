const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>RUDI</h1>
      <menu className="nav-menu">
        <a href="/">Dashboard</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </menu>
    </nav>
  );
};

export default Navbar;
