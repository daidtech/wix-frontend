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
  Badge
} from 'react-bootstrap';
import DropDownIcon from 'components/DropdownIcon/DropdownIcon';
import {BsSuitClub} from "react-icons/bs";
import WrapIcon from 'components/WrapIcon/WrapIcon';

function Header() {
  return (
    <header className='admin-header'>
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Col align='start' className='left-side h-100'>
            <Navbar expand='lg' className='h-100 p-0'>
              <Container className='h-100'>
                <Navbar.Brand href='#home' className='fw-bold'>WIX</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                   <NavDropdown title='My Site 1' id='basic-nav-dropdown' className='header-dropdown active'>
                      <NavDropdown.Item href='#action/3.1'>MySite</NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Site A
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>Site B</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        Site C
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Explore' id='basic-nav-dropdown' className='header-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>
                        App Market
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Updates & Release
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>
                        Inspiring Websites
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.4'>
                        Courses & Lessons
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Help' id='basic-nav-dropdown' className='header-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                    <div className='wrap-link px-3'>
                      <a href='#' className='global-link font-size-small'>
                        <span>Hire a Professional</span>
                      </a>
                    </div>
                    <div className='wrap-badge'>
                      <Badge className='badge-upgrade'>Upgrade</Badge>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col className='right-side h-100'>
            <div className='wrap-search-bar'>
              <InputGroup>
                <InputGroup.Text id='search_key'>
                  <BsSuitClub />
                </InputGroup.Text>
                <Form.Control
                  placeholder='Search for tool, apps, help & more...'
                  aria-label='search_key'
                  aria-describedby='search_key'
                />
              </InputGroup>
            </div>
            <div className='divide-break'></div>
            <WrapIcon>
              <BsSuitClub/>
            </WrapIcon>

            <WrapIcon>
              <BsSuitClub />
            </WrapIcon>

            <WrapIcon>
              <BsSuitClub />
            </WrapIcon>
            <div className='divide-break'></div>
            <DropDownIcon/>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
