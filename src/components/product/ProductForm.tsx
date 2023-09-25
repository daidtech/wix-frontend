import 'react-data-grid/lib/styles.css';
import './ProductForm.scss';
import { Col, Container, Row, FormCheck, Button } from 'react-bootstrap';
import CustomCard from 'components/Commons/CustomCard/CustomCard';
import CustomFileInput from 'components/Commons/CustomFileInput/CustomFilesInput';
import FormTextInput from 'components/Commons/FormTextInput/FormTextInput';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import WrapIcon from 'components/Commons/WrapIcon/WrapIcon';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

function ProductForm() {
  const [value, setValue] = useState('');


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
                <Col xs={8} className='left-side'>
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
                      <Row className='my-4 description'>
                        <Col xs={6}>
                        <label>Description</label>
                        </Col>
                        <Col xs={6} className='text-end'>
                          <Button className='mb-2'>Generate AI Text</Button>
                        </Col>
                        <Col>
                          <ReactQuill className='description-editor' theme="snow" value={value} onChange={setValue} />
                        </Col>
                      </Row>
                    </Container>
                  </CustomCard>
                </Col>
                <Col className='right-side'>
                  <CustomCard>
                    <FormCheck
                      type={'checkbox'}
                      label={`Show in online store`}
                    />
                    <FormCheck
                      type={'checkbox'}
                      label={`Show in Point of Sale`}
                    />
                  </CustomCard>
                  <CustomCard title='Categories'>
                    <FormCheck
                      type={'checkbox'}
                      label={`Show in online store`}
                    />
                    <Button variant="link" className='p-0 create-category-btn'>+ Create Category</Button>
                  </CustomCard>
                  <CustomCard title='Categories'>
                    <Button variant="link" className='p-0 my-2 d-flex'>
                      <WrapIcon className='m-auto'>
                        <BsFillBookmarkPlusFill/>
                      </WrapIcon>
                      <span>Create coupon</span>
                    </Button>
                    <Button variant="link" className='p-0 my-2 d-flex'>
                      <WrapIcon className='m-auto'>
                        <BsFillBookmarkPlusFill/>
                      </WrapIcon>
                      <span>Promote this product</span>
                    </Button>
                    <Button variant="link" className='p-0 my-2 d-flex'>
                      <WrapIcon className='m-auto'>
                        <BsFillBookmarkPlusFill/>
                      </WrapIcon>
                      <span>Edit SEO settings</span>
                    </Button>
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