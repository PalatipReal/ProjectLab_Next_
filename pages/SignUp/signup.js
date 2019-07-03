import React from 'react';
import { Button, Form, FormGroup, Row, Input, Col } from 'reactstrap';
import Formm from '../../Component/form.js'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import { sign } from 'crypto';
import axios from 'axios';

function AddUser() {

  const { inputs, handleInputChange } = useInput({ 
    firstName: 'no', 
    lastName: 'no', 
    email: 'no', 
    Username: 'no', 
    password: 'no',
    CFpassword:'no',
    phoneNumber:'no'
   });
  function handleSubmit () {
    console.log(inputs)
    axios
    .post("/api/user", inputs)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }

function  Signup ()  {
    return (
      <div>
        <Head title="Signup - Project Lab" />
        <Formm >
        <div className="border-loginform">
          <Form  action="/index" className="login-form">
            <h1 className = "text-center" >
              <span className="font-weight-bold" >SIGN UP</span>
            </h1>
          
            <Row>
              <Col mb="6">
                <FormGroup>
                  <Input type ="text" placeholder="Firstname" name="firstName" onChange={handleInputChange}/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                  <Input type ="text" placeholder="Lastname" name="lastName" onChange={handleInputChange}/>
                </FormGroup>
              </Col>
            </Row>
        
            <FormGroup>
              <Input type ="text" placeholder="Email" name="email" onChange={handleInputChange}/>
            </FormGroup>

            <Row>
              <Col mb="6">
                <FormGroup>
                <Input type ="text" placeholder="Username" name="Username"onChange={handleInputChange}/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                <Input type ="text" placeholder="Phone Number" name="phoneNumber" onChange={handleInputChange}/>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col mb="6">
                <FormGroup>
                <Input type ="password" placeholder="Password" name="password" onChange={handleInputChange}/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                <Input type ="password" placeholder="ConfirmPassword" name="CFpassword" onChange={handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
        
        
        <Button className="btn-lg btn-block" color="primary" onClick={() => handleSubmit()}>Register</Button>
        
      </Form>
      <br/>
      <style jsx>{`

      `}</style>
      </div>
      </Formm>
      
      </div>
    );
  
}
return(
    <div>
      {Signup()}
    </div>
)
   

}

export default AddUser;