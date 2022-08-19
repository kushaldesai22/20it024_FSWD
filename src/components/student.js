import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import axios from "react"
export default function Student() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  const student = {
    id: id,
    name: name,
    address: address
  }

  function textChange(event) {
    if (event.target.name === 'id')
      setId(event.target.value)
    if (event.target.name === 'name')
      setName(event.target.value)
    if (event.target.name === 'address')
      setAddress(event.target.value);
  }

  let saveStudent = () => {
    axios.post("http://localhost:8080/student", student)
      .then(response => {
        alert(response.data)
      })
      .catch(error => alert(error))
  }
  return (
    <Form onSubmit={saveStudent}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control name="id" value={id} type="text" placeholder="Enter your id" onChange={textChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={name} type="text" placeholder="Enter name" onChange={textChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={address} type="text" placeholder="Enter your address" onChange={textChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}