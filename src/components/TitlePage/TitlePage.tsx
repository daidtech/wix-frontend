import { Col, Container, Row } from 'react-bootstrap';
import './TitlePage.scss';
import { ChildrenElement } from 'models/common';

interface TitlePageProps {
  children: ChildrenElement,
  title?: string,
  badge?: string
}

function TitlePage({children, title='', badge=''}: TitlePageProps) {
  return (
      <Container fluid className="title-page py-4 px-0">
        <Row className=''>
          <Col>
              <h1>{title} <span>{badge}</span></h1>
          </Col>
          <Col className="action">
            <div className="d-flex justify-content-end">
              {children}
            </div>
          </Col>
        </Row>

      </Container>
  )
}

export default TitlePage;