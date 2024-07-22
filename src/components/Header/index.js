import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdLegendToggle } from "react-icons/md";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./index.css";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="nav-logo">CHANDU</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MdLegendToggle className="header-icon" />{" "}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              <div className="nav-item">
                <FaHome className="icon" />
                Home
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <div className="nav-item">
                <MdPerson className="icon" />
                About
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              <div className="nav-item">
                <GrProjects className="icon" />
                Projects
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
