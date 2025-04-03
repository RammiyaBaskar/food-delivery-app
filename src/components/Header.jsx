import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form ,FormControl} from "react-bootstrap";

const Header = () => {

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup Successful!");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`); // Replace with actual search function
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "orange" }}>
      <div className="container">
        <a className="navbar-brand text-white" href="/">Dabba Wala</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto  d-flex align-items-center">

            {/* 🔍 SEARCH BAR */}
            <li className="nav-item me-3">
              <Form className="d-flex" onSubmit={handleSearch}>
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="light" type="submit">🔍</Button>
              </Form>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/Help">Help</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li> */}
            <li className="nav-item">
            <a className="nav-item text-white"
             style={{ cursor: "pointer", textDecoration: "none" }}
                        onClick={() => setShowLogin(true)}>
                      Login
            </a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Bootstrap Modal */}
    <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" className="w-100">
              Login
            </Button>
            <p className="forgot-password text-right">
                    Not Having an Account? <a  onClick ={() => {setShowLogin(false); setShowSignUp(true)}} href="#">Sign Up</a>
                </p>
            <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Full Name */}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            {/* Sign Up Button */}
            <Button variant="primary" className="w-100" type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>

            {/* Switch to Login */}
            <div className="mt-3 text-center">
              <p className="mb-1">
                Already have an account?  
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSignUp(false);
                    setShowLogin(true);
                  }}
                  style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                >
                  Login
                </a>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>  );
};

export default Header;