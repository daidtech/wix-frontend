import 'react-data-grid/lib/styles.css';
import './ProductForm.scss';
import { Col, Container, Row, FormCheck, Button } from 'react-bootstrap';
import TitleBlock from 'components/Commons/CustomCard/TitleBlock/TitleBlock';
import CustomCard from 'components/Commons/CustomCard/CustomCard';
import CustomFileInput from 'components/Commons/CustomFileInput/CustomFilesInput';
import FormTextInput from 'components/Commons/FormTextInput/FormTextInput';

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
                  <CustomCard title='Product info'>
                    <h3>BASIC INFO</h3>
                    <Container className='px-0'>
                      <Row>
                        <Col xs={8}>
                          <FormTextInput
                            title='Name'
                            id='product_name'
                            placeholder='Add a product name'
                            />
                        </Col>
                        <Col>
                          <FormTextInput
                            title='Ribbon'
                            id='product_ribbon'
                            placeholder='e.g., New Arrival'
                            />
                        </Col>
                      </Row>
                    </Container>
                  </CustomCard>
                </Col>
                <Col>
                  <CustomCard>
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
                    <FormCheck // prettier-ignore
                      type={'checkbox'}
                      label={`Show in online store`}
                    />
                    <Button variant="link" className='p-0 create-category-btn'>+ Create Category</Button>
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