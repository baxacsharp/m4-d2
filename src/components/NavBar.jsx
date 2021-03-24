import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
const NavBar = (props) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Horror</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Sci Fi</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
}
export default NavBar