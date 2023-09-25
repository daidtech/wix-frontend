import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import './TitlePage.scss';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

function TitlePage() {
  return (
      <Container fluid className="title-page py-4 px-0">
        <Row className=''>
          <Col>
              <h1>Products <span>12</span></h1>
          </Col>
          <Col className="action">
            <div className="d-flex justify-content-end">
              <DropdownButton
                align="end"
                title="More Action"
                className='action-more-action round'
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                align="end"
                title={<div><BsFillBookmarkPlusFill />"New Product"</div>}
                className='action-new-product'
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