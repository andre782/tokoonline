import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
    <div className='background'>
      <InputGroup className="d-flex gap">
        <Form.Control
          placeholder="First name"
          aria-label="First name"
          aria-describedby="basic-addon1"
        />

        <Form.Control
          placeholder="Last name"
          aria-label="Last name"
          aria-describedby="basic-addon2"
        />
        </InputGroup>

      <p>Enter your email address</p>
      <InputGroup className="mb-3">
        <Form.Control   placeholder="Email"
          aria-label="Email" id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
        <p>Type in your message</p>
        <InputGroup className="mb-3">
        <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea" className='tinggi'/>
      </InputGroup>
</InputGroup>

<div className="text-center">
  <button className="btnm">Submit</button>
</div>
    </div>
  );
}

export default BasicExample;