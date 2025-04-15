import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form ,FormControl} from "react-bootstrap";
import axios from "axios";

const Header = () => {

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState('');
  const [user, setUser] = useState(null);


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

  
  const validate = () => {
    const newErrors = {};
    // if (!fullName.trim()) {
    //   newErrors.fullName = 'Full Name is required';
    // } else if (fullName.trim().length < 2) {
    //   newErrors.fullName = 'Full Name must be at least 2 characters';
    // }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
    //  setUser({ fullName });
      try {
        const response = await axios.get("http://localhost:5000/users", {
          params: { email },
        });
  
        const userData = response.data.find((user) => user.password === password);
        if (userData) {
          setUser(userData.fullName);
          alert(`Login Successful: ${userData.fullName}`);
          setShowLogin(false);
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        alert("Error logging in. Please try again later.");
      }
      // console.log('Logging in with:', { email, password });
      // alert('Login Successful!:'+email);
      // console.log('Signing up:', { fullName, email, password });
      // alert('Signing up Successful!:${email}');
       setShowLogin(false);
       setShowSignUp(false);
    }
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

            {/*  SEARCH BAR */}
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
            {user ? (
  <span className="nav-item text-white fw-bold">Hello {user}</span>
) : (
  <a className="nav-item text-white"
     style={{ cursor: "pointer", textDecoration: "none" }}
     onClick={() => setShowLogin(true)}>
     Login
  </a>
)}
            
          </li>
          </ul>
        </div>
      </div>
    </nav>
   
    <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email"
               placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}/>
              <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
            </Form.Group>
            <Button onClick={handleLogin} variant="primary" className="w-100">
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
        <Form onSubmit={handleLogin}>
          {/* Full Name */}
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Sign Up Button */}
          <Button variant="primary" className="w-100" type="submit">
            Sign Up
          </Button>

          {/* Switch to Login */}
          <div className="mt-3 text-center">
            <p className="mb-1">
              Already have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSignUp(false);
                  setShowLogin(true);
                }}
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
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