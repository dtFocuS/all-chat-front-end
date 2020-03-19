import React, { Component, Fragment } from 'react';


class Login extends Component {

    render() {

        return(
            <div className='base-container'>
                <div className='header'>Login</div>
                <div className='content'>
                    <div className="image">

                    </div>
                    <div className='form'>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className='btn'>
                        Login
                    </button>
                </div>
            </div>


        )



    }



}

export default Login;