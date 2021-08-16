import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

class Form2 extends Component {
    render() {
        return(
            <Form className="login-form">
                <h1 className="text-center">
                    <span className="font-weight-bold">Meu Formulario</span>    
                </h1>    
                <h2 className="text-center">Bem vindo</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup className="pb-3">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
                <div className="text-center btn-lg btn-dark btn-block pt-1">
                    <Button className="btn-dark">Entrar</Button>
                </div> 
                <div className="text-center pt-3">
                    Ou entre com a sua conta do Facebook
                </div>
                <FacebookLoginButton className="mt-3 mb-3"/>
                <div className="text-center text-decoration-none">
                    <a href="/sign-up">Cadastrar</a>
                    <span className="p-2">|</span>
                    <a href="/sign-up">Esqueceu a Password</a>
                </div>
            </Form>  
        );      
    }
}

export default Form2;