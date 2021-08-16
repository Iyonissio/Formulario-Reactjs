import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login';

class Form2 extends Component {
    render() {
        return(
            <Form className="App">
                <h1>
                    <span className="font-weight-bold">Meu Formulario</span>    
                </h1>    
                <h2>Bem vindo</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
            </Form>  
        );      
    }
}

export default Form2;