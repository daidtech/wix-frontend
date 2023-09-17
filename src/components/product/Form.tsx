import 'react-data-grid/lib/styles.css';
import './Form.scss';
import { Col, Container, Row, FormCheck } from 'react-bootstrap';
import TitleBlock from 'components/TitleBlock/TitleBlock';

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
                  <div className="image-and-video rounded">
                    <TitleBlock/>
                    <div className="break-line"></div>
                  </div>
                </Col>
                <Col>
                  <div className="content-section rounded g-box">
                    <FormCheck // prettier-ignore
                      type={'checkbox'}
                      label={`Show in online store`}
                    />
                    <FormCheck // prettier-ignore
                      type={'checkbox'}
                      label={`Show in Point of Sale`}
                    />
                  </div>
                  <div className="categories rounded g-box">
                    <TitleBlock/>
                    <div className="break-line"></div>
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