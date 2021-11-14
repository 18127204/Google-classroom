import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { FacebookLoginButton } from "react-social-login-buttons";
import './index.css'
const Login = () => {
    
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    return (
        <Form className="login-form">
            <FormGroup>
                <Label>User</Label>
                <Input type="input" placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-dark col-12" >
                Log in
            </Button>
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3" />
            <div className="text-center">
                <a href="/sign-up">Sign up</a>
                <span className="p-2">|</span>
                <a href="/sign-up">Forgot Password</a>
            </div>
        
        </Form>
      );
    
}
export default Login;