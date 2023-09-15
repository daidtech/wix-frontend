import 'react-data-grid/lib/styles.css';
import './Form.scss';
import { Col, Container, Row } from 'react-bootstrap';

function Form() {
  return (
    <div className='product-form'>
      <div className="wrap-page">
        <div className="hero-header">
          <section className=''> </section>
        </div>
        <div className="wrap-content">
          <div className="content">
            <Container>
              <Row>
                <Col xs={8}>
                  <div className="image-and-video">
                  col1
                  </div>
                </Col>
                <Col>
                  <div className="content-section">
                    col2
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Form;