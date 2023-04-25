import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className='flex items-center justify-center h-screen flex-col'>
        <h1 className='text-center'>Counter: {count}</h1>
        <button className='bg-red-300 p-2 mb-2 font-bold' onClick={this.increment}>Increment</button>
        <button className='bg-red-300 p-2 font-bold' onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
