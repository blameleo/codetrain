import React, { Component } from 'react'



class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = (e) => {
    const { name, value  } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userData);
    this.setState({
      userData: {
        name: "",
        email: "",
        password: ""
      }
    });
  }

  render() {
    return (
      <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='font-bold'>React Class Form</h1>
        <form className='flex flex-col' onSubmit={this.handleSubmit}>
          <label>name</label>
          <input className='border border-black' type="text" name="name" value={this.state.userData.name} onChange={this.handleChange}/>
          <br />
          <label>email address</label>
          <input className='border border-black' type="email" name="email" value={this.state.userData.email} onChange={this.handleChange}/>
          <br />
          <label>password</label>
          <input className='border border-black' type="password" name="password" value={this.state.userData.password} onChange={this.handleChange}/>
          <br />
          <input className='bg-blue-400 p-1 ' type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default FormClass;
