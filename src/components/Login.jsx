import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { useDispatch } from 'react-redux';
import './login.css';
//import { setUser } from '../redux/usersSlice';
//import { toast } from 'react-toastify';

function Login() {

    //const dispatch = useDispatch();

    //const navigate = useNavigate();

    const [focus, setFocus] = useState({
        errUser: false,
        errPass: false
    });

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });



    const handleSubmit = async (e) => {    // This function created stop rountering in signup form
        e.preventDefault();


        // if( focus.errName || focus.errEmail || focus.errPass || focus.errCpass ){
        //     return false;
        // }
        // console.log("pppppppppppppppp");
        if (inputs.email === '' && inputs.password === '') {
            alert('fill the form');
        }

        try {
            console.log(inputs);
            const res = await axios.post('https://dummyjson.com/auth/login', inputs, {
            withCredentials: true
            });
            console.log(res);
            //if (res.data.success) {
            // localStorage.setItem('token' , res.data.token) ;
            //dispatch(setUser(res.data.sendUser));
            //navigate("/");
            //toast.success(res.data.message);
            //console.log(res.data.message);
            //}

        } catch (error) {
            console.log(error);
            //toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <div className='login-restaurent'>
                <Container>
                    <form className='login-list' onSubmit={handleSubmit}>
                        <Row>
                            <div>
                                <h2 className='login-head'>Log in account</h2>
                                <span className='login-mainHead'>Enter your details below</span>
                            </div>
                            <Col sm={6}>
                                <div>
                                    <span className='loginList-Head'>Username :-</span>
                                    <input type="text" placeholder='Email ' className='inpuBox-login' id='email' name='email' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} onBlur={() => setFocus({ ...focus, errUser: true })} focus={focus.errUser.toString()} required />
                                    <span className='error-login'>Enter a valid Username</span>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                    <span className='loginList-Head'>Password :-</span>
                                    <input type="password" placeholder='Password' className='inpuBox-login' id='password' name='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} onBlur={() => setFocus({ ...focus, errPass: true })} focus={focus.errPass.toString()} required />
                                    <span className='error-login'>Enter a valid Password</span>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='loginList-ButtonDiv'>
                                    <button className='loginList-Button'>Log In</button>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='singup-last'>
                                    <span className='singup-text'>Create an account? <Link to='/' className='singup-login'>Singup</Link></span>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default Login 