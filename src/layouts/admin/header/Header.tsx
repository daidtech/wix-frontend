import React from 'react';
import './Header.scss';
import {
  Form,
  InputGroup,
  NavDropdown,
  Navbar,
  Nav,
  Col,
  Row,
  Container,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';

function Header() {
  return (
    <header className='admin-header'>
      <Container fluid>
        <Row>
          <Col align="start" className='left-side'>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col className='right-side'>
            <Row>
              <Col id="search-bar" className='w-50'>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="search_key">icon</InputGroup.Text>
                  <Form.Control
                    placeholder="Search for tool"
                    aria-label="search_key"
                    aria-describedby="search_key"
                  />
                </InputGroup>
              </Col>
              <div className='divide-break'></div>
              <Col>
                <DropdownButton
                  align="end"
                  title="Icon"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
