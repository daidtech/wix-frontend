import 'react-data-grid/lib/styles.css';
import './ProductForm.scss';
import { Col, Container, Row, FormCheck } from 'react-bootstrap';
import TitleBlock from 'components/Commons/CustomCard/TitleBlock/TitleBlock';
import CustomCard from 'components/Commons/CustomCard/CustomCard';
import CustomFileInput from 'components/Commons/CustomFileInput/CustomFilesInput';

function ProductForm() {
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
                  <CustomCard title='Images and videos'>
                    <div className='d-flex'>
                      <CustomFileInput/>
                      <CustomFileInput/>
                    </div>
                  </CustomCard>
                </Col>
                <Col>
                  <CustomCard title='Categories'>
                    <FormCheck // prettier-ignore
                      type={'checkbox'}
                      label={`Show in online store`}
                    />
                    <FormCheck // prettier-ignore
                      type={'checkbox'}
                      label={`Show in Point of Sale`}
                    />
                  </CustomCard>
                  <CustomCard title='Categories'>
                    <div className='d-flex'>
                      <CustomFileInput/>
                      <CustomFileInput/>
                    </div>
                  </CustomCard>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductForm;