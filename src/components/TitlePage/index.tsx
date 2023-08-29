import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import './styles.scss';

function TitlePage() {
  return (
      <Container className="title-page">
        <Row className=''>
          <Col>
              <h1>Products <span>12</span></h1>
          </Col>
          <Col className="action justify-content-end">
            <div className="d-flex">
              <DropdownButton
                align="end"
                title="More Action"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                align="end"
                title="New Product"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>

      </Container>
  )
}

export default TitlePage;