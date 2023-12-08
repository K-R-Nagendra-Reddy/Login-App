// Write your code here
import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false, heading: 'Please Login', button: 'Login'}

  onChange = () => {
    const {isLoggedIn, heading, button} = this.state
    if (isLoggedIn === false) {
      this.setState({
        isLoggedIn: true,
        heading: 'Please Login',
        button: 'Login',
      })
    }

    this.setState({
      isLoggedIn: false,
      heading: 'Welcome User',
      button: 'Logout',
    })
  }

  render() {
    const {isLoggedIn, heading, button} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">{heading}</h1>
          <button className="button" type="button" onClick={this.onChange}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
