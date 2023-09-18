import Form from 'react-bootstrap/Form';

function CustomFileInput() {
  return (
    <div className="custom-file-input">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div>
  )
}


export default CustomFileInput;