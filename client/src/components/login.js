import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
// write if statement - logging in as artist or engineer? or have 2 separate login components? 
        axios.post("/login", {
            email: this.state.email,
            password: this.state.password,
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button onClick={this.onSubmit}>Login</button>
                </form>
                <Link to="/signup">Don't have an account yet? <span>Signup</span></Link>
            </div>
        );
    }
}