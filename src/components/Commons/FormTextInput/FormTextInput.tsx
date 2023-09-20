import Form from 'react-bootstrap/Form';

interface FormTextInputProps {
  id: string,
  title?: string,
  type?: 'input' | 'password',
  placeholder?: string,
  descriptionId?: string,
  description?: string
}

function FormTextInput({  title,
                          id,
                          type = 'input',
                          descriptionId = '',
                          description='',
                          placeholder= '',
                        }: FormTextInputProps) {
  return (
    <>
      <Form.Label htmlFor={id}>{title}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        aria-describedby={descriptionId}
        placeholder={placeholder}
      />
      { description ? (
                        <Form.Text id={descriptionId} muted>
                          {description}
                        </Form.Text>
                      ) : <></> }

    </>
  )
}
export default FormTextInput;